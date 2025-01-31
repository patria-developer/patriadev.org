import LinkedinIcon from '@/assets/icons/linkedin.svg';
import SocialMedia from '@/constant/social-media.json';
import { SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { JSX } from 'react';
import { navigationLink } from './header';

const iconList: { [key: string]: JSX.Element } = {
    linkedin: (
        <LinkedinIcon
            viewBox='0 0 24 24'
            height={24}
            width={24}
            className='h-11 w-11 p-2.5 text-neutral-500'
        />
    ),
    youtube: <SiYoutube height={42} width={42} className='p-2.5 text-neutral-500' />,
    instagram: <SiInstagram height={42} width={42} className='p-2.5 text-neutral-500' />,
};
function Footer() {
    return (
        <footer className='container mx-auto px-5 pb-10 pt-20'>
            <div className='mb-16 grid grid-cols-1 gap-y-6 md:grid-cols-12'>
                <div className='col-span-8 lg:col-span-5'>
                    <a
                        href='mailto:hi@patriadev.org'
                        className='block text-[28px] font-medium leading-[42px] underline xl:text-4xl'
                    >
                        hi@patriadev.org
                    </a>
                    <p className='mt-6 text-lg text-secondary'>
                        Komunitas IT yang berdomisili di Blitar yang memiliki agenda kegiatan di
                        bidang teknologi .
                    </p>
                </div>
                <div className='col-span-4 flex flex-col justify-end gap-6 lg:col-span-7 lg:flex-row'>
                    {navigationLink.map(({ title, url }) => (
                        <Link
                            key={title}
                            href={url}
                            className='block text-lg font-medium capitalize'
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Social Media */}
            <div className='flex flex-col-reverse justify-between gap-y-6 border-t pt-4 md:flex-row md:items-center'>
                <p className='text-sm'>© 2025 Patriadev. All rights reserved.</p>
                <div className='flex items-center gap-x-2'>
                    {SocialMedia.map(({ link, name }) => (
                        <Link
                            className='rounded-full border'
                            href={link}
                            title={String(name)}
                            key={name}
                            target='_blank'
                        >
                            {/* {icon} */}
                            {iconList[name]}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
