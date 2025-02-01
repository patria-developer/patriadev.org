'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Events from '@/constant/event.json';
import { CoffeeIcon, PodcastIcon, Share2Icon } from 'lucide-react';
import { JSX, useEffect, useState } from 'react';

type EventType = {
    title: string;
    description: string;
    name: string;
    icon?: JSX.Element;
};
const iconStyle = 'h-8 w-8 text-white rounded-md bg-primary p-2';
const EventsIcon: { [key: string]: JSX.Element } = {
    'sharing-session': <Share2Icon className={iconStyle} />,
    'work-from-cafe': <CoffeeIcon className={iconStyle} />,
    mentoring: <PodcastIcon className={iconStyle} />,
};

export default function EventAccordion({ className }: { className?: string }) {
    const [eventList, setEventList] = useState(Events);

    useEffect(() => {
        setEventList(Events.map((event) => ({ ...event, icon: EventsIcon[event.name] })));
    }, []);

    return (
        <Accordion type='multiple' className={className}>
            {eventList.map(({ title, description, icon }: EventType) => (
                <AccordionItem key={title} value={title}>
                    <AccordionTrigger>
                        <div className='flex items-center gap-x-2.5'>
                            {icon}
                            {title}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className='ml-[42px] text-sm text-secondary'>
                        {description}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
