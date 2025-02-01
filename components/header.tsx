import logo from '@/assets/images/patria dev logo only.png';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';

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
            <div className='container mx-auto flex h-[72px] items-center justify-between px-5 xl:px-0'>
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
                <Button className='hidden md:block' rounded='pill'>
                    Hubungi Kami
                </Button>
                {/** Mobile Menu */}
                <Drawer>
                    <DrawerTrigger className='md:hidden'>
                        <MenuIcon />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <div className='flex flex-col gap-8'>
                                {navigationLink.map(({ title, url }) => (
                                    <Link key={title} href={url} className='block capitalize'>
                                        <DrawerTitle>{title}</DrawerTitle>
                                    </Link>
                                ))}
                            </div>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
}
