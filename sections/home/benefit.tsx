import HandshakeIcon from '@/assets/icons/handshake.svg';
import PlugConnectedIcon from '@/assets/icons/plugs-connected.svg';
import ContributionIcon from '@/assets/icons/hand-fist.svg';
import { JSX } from 'react';
import { cn } from '@/lib/utils';

type CardBenefitProps = {
    title: string;
    description?: string;
};
function CardBenefit({ title, description }: CardBenefitProps) {
    return (
        <div>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p className='mt-4 text-secondary'>{description}</p>
        </div>
    );
}

type CardSquareProps = {
    type?: 'text' | 'icon';
    children?: JSX.Element;
    className?: HTMLElement['className'];
} & CardBenefitProps;

function CardSquare({ description, title, type = 'text', className, children }: CardSquareProps) {
    if (type === 'icon') {
        return (
            <div className={cn('flex h-60 items-center justify-center bg-card', className)}>
                {children}
            </div>
        );
    } else {
        return (
            <div
                className={cn(
                    'flex h-60 flex-col justify-center border border-card bg-white p-6',
                    className,
                )}
            >
                <h3 className='text-xl font-medium'>{title}</h3>
                <p className='mt-4 text-secondary'>{description}</p>
            </div>
        );
    }
}
function Benefit() {
    return (
        <section className='grid grid-cols-1 gap-x-20 gap-y-10 px-5 pb-16 pt-12 lg:grid-cols-2 xl:px-0'>
            <div className='flex flex-col justify-between gap-y-12'>
                <h2 className='text-2xl font-medium xl:text-4xl'>
                    Kenapa kamu harus bergabung dengan kami?
                </h2>
                <div className='grid gap-y-6 lg:grid-cols-2 xl:gap-x-4'>
                    <CardBenefit
                        title='4+'
                        description='Telah berjalan lebih dari 4 tahun  dalam berkontribusi di bidang teknologi'
                    />
                    <CardBenefit
                        title='60+'
                        description='Anggota yang telah terdaftar di komunitas ini'
                    />
                </div>
            </div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2'>
                <CardSquare
                    title='Belajar & Berkembang Bersama'
                    description='Di dunia teknologi yang terus berkembang, belajar sendiri bisa terasa sulit. Di sini, kamu bisa belajar langsung dari para ahli, berbagi pengalaman, dan berkembang lebih cepat!'
                />
                <CardSquare title='icon Collaboration' type='icon'>
                    <HandshakeIcon height={56} weight={56} alt='collaboration icon' />
                </CardSquare>
                <CardSquare title='icon Connection' type='icon' className='order-2 md:order-1'>
                    <PlugConnectedIcon height={56} weight={56} alt='connection icon' />
                </CardSquare>
                <CardSquare
                    title='Networking & Kolaborasi'
                    description='Bertemu dengan sesama developer, designer, dan tech enthusiast untuk membangun relasi profesional, berbagi peluang kerja, hingga kolaborasi proyek nyata.'
                    className='order-1 md:order-2'
                />
                <CardSquare
                    title='Mentoring & Peluang Karir'
                    description='Kamu bisa mendapatkan bimbingan langsung dari mentor berpengalaman, serta informasi tentang peluang kerja, freelance, hingga startup yang bisa kamu ikuti.'
                    className='order-3'
                />
                <CardSquare title='icon Connection' type='icon' className='order-4'>
                    <ContributionIcon height={56} weight={56} alt='connection icon' />
                </CardSquare>
            </div>
        </section>
    );
}

export default Benefit;
