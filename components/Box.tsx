import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
    return (
        <div
            className={twMerge(`bg-[#111827]w-full h-fit rounded-lg`, className)}
        >
            {children}
        </div>
    );
};

export default Box;