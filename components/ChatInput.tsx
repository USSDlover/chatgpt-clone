'use client';

import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import toast from 'react-hot-toast';
import ModelSelection from '@/components/ModelSelection';
import useSWR from 'swr';

type Props = {
    chatId: string;
}

function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState('');
    const {data: session} = useSession();
    const txtAreaRef = useRef<HTMLTextAreaElement>(null);

    const { data: model } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    });

    const sendMessage = async (e?: FormEvent<HTMLFormElement>) => {
        if (e)
            e.preventDefault();

        if (!prompt) return;

        const input = prompt.trim();
        setPrompt('');

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        };

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message);

        const notification = toast.loading('ChatGPT is thinking...');

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session
            }),
            keepalive: true
        }).then(() => {
            toast.success('ChatGPT has responded!', {
                id: notification
            });
        }).catch((error) => {
            console.log('Error on API call', error);
        });
    };

    const autoGrow = () => {
        if (txtAreaRef.current) {
            txtAreaRef.current.style.height = '5px';
            txtAreaRef.current.style.height = txtAreaRef.current.scrollHeight + 'px';
        }
    }

    useEffect(() => {
        const keyDownHandler = async (event: KeyboardEvent) => {
            if (event.ctrlKey && (event.code === 'Enter' || event.code === 'NumpadEnter')) {
                await sendMessage();
            }
        }
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    }, [prompt]);

    return (
        <div className={'h-fit bg-gray-700/50 text-gray-400 rounded-lg text-sm'}>
            <form onSubmit={e => sendMessage(e)} className={'h-fit p-5 space-x-5 flex justify-between'}>
                <textarea
                    ref={txtAreaRef}
                    className={'w-full h-auto h-fit bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300'}
                    value={prompt}
                    disabled={!session}
                    onChange={(e) => {
                        setPrompt(e.target.value);
                        autoGrow();
                    }}
                    placeholder={'Type your message here...'}
                />

                <button
                    disabled={!prompt || !session}
                    type={'submit'}
                    className={'bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'}
                >
                    <PaperAirplaneIcon className={'h-4 w-4 -rotate-45'}/>
                </button>
            </form>

            <div className={'md:hidden'}>
                <ModelSelection />
            </div>
        </div>
    );
}

export default ChatInput;
