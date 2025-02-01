import CardLabel from '@/components/ui/card-label';
import EventAccordion from './event-accordion';

function Event() {
    return (
        <section className='grid animate-fadeLeft grid-cols-1 gap-x-20 gap-y-6 px-5 pb-16 pt-12 lg:grid-cols-2 xl:px-0'>
            <div>
                <CardLabel label='Aktivitas' />
                <h2 className='mt-6 text-2xl font-medium xl:text-4xl'>
                    Mewadahi kamu melalui berbagai kegiatan
                </h2>
                <p className='mt-6 text-secondary xl:text-lg'>
                    Kami mendorong kamu di berbagai kegiatan untuk meningkatkan skill kamu.
                </p>
                <EventAccordion className='mt-6' />
            </div>
            <div></div>
        </section>
    );
}
export default Event;
