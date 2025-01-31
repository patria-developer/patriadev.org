import StarIcon from '@/assets/icons/star.svg';

type CardLabelProps = {
    label: string;
};
function CardLabel({ label }: CardLabelProps) {
    return (
        <div className='flex max-w-max items-center gap-x-2 rounded-full border px-4 py-2 text-sm leading-none'>
            {/* <Image src={StarIcon} height={16} width={16} alt='star icon' /> */}
            <StarIcon height={16} width={16} alt='star icon' />
            <p>{label}</p>
        </div>
    );
}

export default CardLabel;
