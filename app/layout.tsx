import Footer from '@/components/footer';
import Header from '@/components/header';
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google';
import './globals.css';

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
            <head>
                <link rel='icon' href='/favicon.ico' />
                <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
            </head>
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
