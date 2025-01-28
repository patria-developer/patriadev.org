import logo from '@/assets/images/patria dev logo only.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

type link = {
    title: string;
    url: string;
};

const links: link[] = [
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
];
export default function Header() {
    return (
        <header className='border-b'>
            <div className='h-[72px] px-5 xl:px-0 container flex items-center justify-between md:mx-auto'>
                <Link href='/'>
                    <Image src={logo} alt='patria dev logo' width={40} height={40} />
                </Link>
                <div className='hidden md:flex gap-8'>
                    {links.map(({ title, url }) => (
                        <Link key={title} href={url} className='capitalize block'>
                            {title}
                        </Link>
                    ))}
                </div>
                <Button rounded='pill'>Hubungi Kami</Button>
            </div>
        </header>
    );
}
