import MarkIcon from '@/assets/icons/mark.svg';
import DummyImage from '@/assets/images/dummy-profile.jpeg';
import ImageSlide from '@/assets/images/image-slide.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CardLabel from './ui/card-label';
export default function Hero() {
    return (
        <section className='grid grid-cols-1 gap-x-20 gap-y-6 px-5 pb-16 pt-12 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-hero-pattern before:opacity-80 md:grid-cols-2 xl:px-0'>
            <div className='flex max-w-[560px] flex-col items-start justify-center'>
                <CardLabel label='Komunitas IT di Blitar' />
                <h1 className='mt-6 text-[28px] font-medium leading-[48px] xl:text-[40px]'>
                    Dari Bumi Patria untuk
                    <span className='relative mr-1 inline-block bg-gradient-to-r from-primary/0 to-primary/25 pr-3 leading-[50px] after:absolute after:-top-0.5 after:right-0 after:h-[54px] after:w-0.5 after:rounded-full after:bg-primary after:content-[""]'>
                        Indonesia
                    </span>
                </h1>
                <p className='mt-5 text-secondary xl:text-lg'>
                    Komunitas IT yang berdomisili di Blitar yang memiliki agenda kegiatan di bidang
                    teknologi.
                </p>
                <Button rounded='pill' size='lg' className='mt-10'>
                    Join Us
                </Button>
            </div>
            <div className='ml-auto grid grid-cols-1 gap-4 md:max-w-[560px] xl:grid-cols-2'>
                <Image
                    src={ImageSlide}
                    className='rounded-2xl bg-red-500 object-cover xl:col-span-2'
                    alt='Event community'
                    width={600}
                    height={375}
                />
                <div className='rounded-2xl bg-primary p-6'>
                    <p className='mb-2.5 text-white'>
                        “There is no power for change greater than a community discovering what it
                        cares about”
                    </p>
                    <MarkIcon
                        alt='deni profile'
                        width={40}
                        height={40}
                        className='rounded-full object-cover'
                    />
                </div>
                <div className='rounded-2xl bg-card p-6'>
                    <div className='mb-9 flex'>
                        {Array(7)
                            .fill('')
                            .map((_item, index) => (
                                <Image
                                    key={'profile-' + index}
                                    src={DummyImage}
                                    alt='image profile'
                                    width={40}
                                    height={40}
                                    className={`rounded-full object-cover ${index !== 0 ? '-ml-3' : ''}`}
                                />
                            ))}
                    </div>
                    <p className='font-plus-jakarta-sans mb-3 text-2xl font-bold'>60+</p>
                    <p className='text-secondary'>Active Member</p>
                </div>
            </div>
        </section>
    );
}
