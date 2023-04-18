'use client'

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import '../styles/globals.css';

function Login() {
    return (
        <div className={'bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'}>
            <Image
                src={'https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png'}
                width={300}
                height={300}
                alt={'logo'}
            />
            <button onClick={() => signIn('google')} className={'text-white font-bold text-3xl animate-pulse'}>
                Sign In to use ChatGPT
            </button>
        </div>
    );
}

export default Login;
