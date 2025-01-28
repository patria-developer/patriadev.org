import Header from '@/components/header';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubikSans = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${rubikSans.variable} antialiased`} suppressHydrationWarning>
                <Header />
                <main className='container mx-auto relative'>{children}</main>
            </body>
        </html>
    );
}
