import MarkIcon from '@/assets/icons/mark.svg';
import DummyImage from '@/assets/images/dummy-profile.jpeg';
import ImageSlide from '@/assets/images/image-slide.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CardLabel from '../../components/ui/card-label';
export default function Hero() {
    return (
        <section className='grid grid-cols-1 gap-x-20 gap-y-6 px-5 pb-16 pt-12 before:absolute before:left-0 before:top-0 before:-z-10 before:h-screen before:w-full before:bg-hero-pattern before:opacity-80 md:grid-cols-2 xl:px-0'>
            <div className='flex max-w-[560px] flex-col items-start justify-center'>
                <CardLabel label='Komunitas IT di Blitar' />
                <div className='flex flex-col items-start justify-start text-[28px] font-medium leading-10 xl:text-[40px] xl:leading-[48px]'>
                    <h1 className='mt-6 animate-fadeLeft'>
                        Dari Bumi Patria untuk
                        <p className='relative mr-1 block max-w-max pr-3 leading-7 before:absolute before:-top-0.5 before:right-0 before:h-8 before:w-56 before:animate-expandFromRight before:bg-gradient-to-r before:from-primary/0 before:from-20% before:to-primary/25 before:object-right before:duration-300 before:content-[""] after:absolute after:-top-0.5 after:right-0 after:h-8 after:w-1 after:animate-fadeLeft after:rounded-full after:bg-primary after:content-[""] xl:leading-[50px] xl:before:h-[54px] xl:after:h-[54px]'>
                            Indonesia
                        </p>
                    </h1>
                </div>
                <p className='mt-5 animate-fadeUp text-secondary xl:text-lg'>
                    Patria Dev hadir untuk menyatukan para developer, designer, dan tech enthusiast
                    yang ingin belajar, berbagi, dan bertumbuh bersama.
                </p>
                <Button rounded='pill' size='lg' className='mt-10'>
                    Join Us
                </Button>
            </div>
            <div className='ml-auto grid grid-cols-1 gap-4 md:max-w-[560px] xl:grid-cols-2'>
                <Image
                    src={ImageSlide}
                    className='animate-fadeRight rounded-2xl bg-red-500 object-cover xl:col-span-2'
                    alt='Event community'
                    width={600}
                    height={375}
                />
                <div className='animate-fadeLeft rounded-2xl bg-primary p-6'>
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
                <div className='animate-fadeUp rounded-2xl bg-card p-6'>
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
