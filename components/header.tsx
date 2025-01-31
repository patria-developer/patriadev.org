import logo from '@/assets/images/patria dev logo only.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type link = {
    title: string;
    url: string;
};

export const navigationLink: link[] = [
    {
        title: 'tentang kami',
        url: '/about-us',
    },
    {
        title: 'blog',
        url: '/blog',
    },
    {
        title: 'event',
        url: '/event',
    },
    {
        title: 'kontak kami',
        url: '/contact',
    },
];
export default function Header() {
    return (
        <header className='border-b'>
            <div className='container flex h-[72px] items-center justify-between px-5 md:mx-auto xl:px-0'>
                <Link href='/'>
                    <Image src={logo} alt='patria dev logo' width={40} height={40} />
                </Link>
                <div className='hidden gap-8 md:flex'>
                    {navigationLink
                        .filter((item) => item.title !== 'kontak kami')
                        .map(({ title, url }) => (
                            <Link key={title} href={url} className='block capitalize'>
                                {title}
                            </Link>
                        ))}
                </div>
                <Button rounded='pill'>Hubungi Kami</Button>
            </div>
        </header>
    );
}
