import Benefit from '@/sections/home/benefit';
import Event from '@/sections/home/event';
import Hero from '@/sections/home/hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patria Dev',
    description: 'Komunitas IT di Blitar',
};
export default function Home() {
    return (
        <>
            <Hero />
            <Benefit />
            <Event />
        </>
    );
}
