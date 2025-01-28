import Hero from '@/components/hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patria Dev',
    description: 'Komunitas IT di Blitar',
};
export default function Home() {
    return <Hero />;
}
