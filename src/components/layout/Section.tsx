import { cn } from '../../lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    containerClassName?: string;
    bg?: 'white' | 'light-gray' | 'navy';
    id?: string;
}

export function Section({
    children,
    className,
    containerClassName,
    bg = 'white',
    id,
    ...props
}: SectionProps) {
    const bgColors = {
        'white': 'bg-[var(--color-background)]',
        'light-gray': 'bg-[var(--color-surface)]',
        'navy': 'bg-[var(--color-primary)] text-white',
    };

    return (
        <section id={id} className={cn("py-20 md:py-28", bgColors[bg], className)} {...props}>
            <div className={cn("container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
