import { cn } from '../../lib/utils';

interface LogoProps {
    className?: string;
    size?: 'navbar' | 'footer';
}

export function Logo({ className, size = 'navbar' }: LogoProps) {
    const sizeClasses = size === 'footer'
        ? 'h-16 md:h-20 w-auto'
        : 'h-10 md:h-12 lg:h-14 w-auto';

    return (
        <img
            src="/images/logo.png"
            alt="Dogan Septem Interijeri"
            className={cn(sizeClasses, className)}
        />
    );
}
