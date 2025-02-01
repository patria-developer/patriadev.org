import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

function UnderDevelopment() {
    return (
        <div className='flex h-[calc(100dvh-440px)] flex-col items-center justify-center gap-y-6 px-4'>
            <h1>
                Great things are coming! 🚀 We’re currently building this page to make it amazing
                for you. Stay tuned!
            </h1>
            <Link href='/'>
                <Button>Back to Home</Button>
            </Link>
        </div>
    );
}

export default UnderDevelopment;
