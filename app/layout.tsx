import Header from '@/components/header';
import { Rubik, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const rubikSans = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: '--font-plus-jakarta-sans',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${rubikSans.variable} ${plusJakartaSans.variable} antialiased`}
                suppressHydrationWarning
            >
                <Header />
                <main className='container relative mx-auto'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
