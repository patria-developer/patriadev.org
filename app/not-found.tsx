import UnderDevelopment from '@/components/under-development';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patria Dev - Page Not Found',
    description: 'Komunitas IT di Blitar',
};
function NotFoundPage() {
    return <UnderDevelopment />;
}

export default NotFoundPage;
