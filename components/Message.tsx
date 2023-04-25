import { DocumentData } from '@firebase/firestore';
import { useLayoutEffect, useRef } from 'react';

type Props = {
    message: DocumentData,
    scrollToTop: boolean
}

function Message({ message, scrollToTop }: Props) {
    const elRef = useRef<HTMLDivElement>(null);
    const isChatGpt = message.user.name === 'ChatGPT';

    useLayoutEffect(() => {
        if (scrollToTop && !!elRef.current) {
            elRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [elRef, scrollToTop]);

    return (
        <div ref={elRef} className={`py-5 text-white ${isChatGpt && 'bg-[#434654]'}`}>
            <div className={'flex space-x-5 px-10 max-w-2xl mx-auto'}>
                <img src={message.user.avatar} alt='User avatar' className={'h-8 w-w'} />
                <p className={'pt-1 text-sm'}>{message.text}</p>
            </div>
        </div>
    );
}

export default Message;
