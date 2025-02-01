import CardLabel from '@/components/ui/card-label';
import EventAccordion from './event-accordion';
import Image from 'next/image';
import ActivityImage from '@/assets/images/activity.jpg';
function Event() {
    return (
        <section className='grid grid-cols-1 gap-x-20 gap-y-6 px-5 pb-16 pt-12 lg:grid-cols-2 xl:px-0'>
            <div className='animate-fadeLeft'>
                <CardLabel label='Aktivitas' />
                <h2 className='mt-6 text-2xl font-medium xl:text-4xl'>
                    Mewadahi kamu melalui berbagai kegiatan
                </h2>
                <p className='mt-6 text-secondary xl:text-lg'>
                    Kami mendorong kamu di berbagai kegiatan untuk meningkatkan skill kamu.
                </p>
                <EventAccordion className='mt-6' />
            </div>
            <div className='ml-auto animate-fadeRight'>
                <Image
                    src={ActivityImage}
                    className='rounded-2xl'
                    width={600}
                    height={375}
                    alt='Event community'
                />
            </div>
        </section>
    );
}
export default Event;
