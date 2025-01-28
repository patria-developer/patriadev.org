import DummyImage from '@/assets/images/dummy-profile.jpeg';
import ImageSlide from '@/assets/images/image-slide.png';
import MarkIcon from '@/assets/images/mark.svg';
import StarIcon from '@/assets/images/star.svg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function Hero() {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-x-20 before:left-0 before:top-0 before:w-full before:h-full before:absolute before:opacity-80 before:bg-hero-pattern md:pt-12 before:-z-10 md:pb-16 px-5 xl:px-0'>
            <div className='max-w-[560px] flex flex-col items-start justify-center'>
                <div className='flex py-2 border rounded-full px-4 gap-x-2 text-sm leading-none items-center max-w-max'>
                    <Image src={StarIcon} height={16} width={16} alt='star icon' />
                    <p>Komunitas IT di Blitar</p>
                </div>
                <h1 className='font-medium text-[40px] leading-[48px] mt-6'>
                    Dari Bumi Patria untuk
                    <span className='mr-1 inline-block relative after:absolute after:right-0 bg-gradient-to-r from-primary/0 to-primary/25 after:content-[""] after:w-0.5 after:h-[54px] leading-[50px] after:-top-0.5 after:rounded-full after:bg-primary pr-3'>
                        Indonesia
                    </span>
                </h1>
                <p className='mt-5 text-lg text-secondary'>
                    Komunitas IT yang berdomisili di Blitar yang memiliki agenda kegiatan di bidang
                    teknologi.
                </p>
                <Button rounded='pill' size='lg' className='mt-10'>
                    Join Us
                </Button>
            </div>
            <div className='grid grid-cols-2 gap-4 max-w-[560px] ml-auto'>
                <Image
                    src={ImageSlide}
                    className='bg-red-500 col-span-2 rounded-2xl object-cover'
                    alt='Event community'
                    width={600}
                    height={375}
                />
                <div className='bg-primary rounded-2xl p-6 '>
                    <p className='text-white mb-2.5'>
                        “There is no power for change greater than a community discovering what it
                        cares about”
                    </p>
                    <Image
                        src={MarkIcon}
                        alt='deni profile'
                        width={40}
                        height={40}
                        className='rounded-full object-cover'
                    />
                </div>
                <div className='bg-card rounded-2xl p-6'>
                    <div className='flex mb-9'>
                        {Array(4)
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
                    <p className='font-bold text-2xl mb-3'>60+</p>
                    <p className='text-secondary'>Active Member</p>
                </div>
            </div>
        </section>
    );
}
