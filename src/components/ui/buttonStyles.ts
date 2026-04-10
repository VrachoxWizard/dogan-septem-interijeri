import { cn } from '../../lib/utils';

export type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonStyleOptions {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

const baseStyles = "inline-flex min-h-[44px] items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-none";

const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-md focus:ring-[var(--color-primary)]",
    accent: "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] shadow-sm hover:shadow-md focus:ring-[var(--color-accent)]",
    outline: "border border-[var(--color-border-light)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]",
    ghost: "text-[var(--color-primary)] hover:bg-gray-50",
};

const sizes = {
    sm: "h-10 px-6 text-xs",
    md: "h-12 px-8 text-sm",
    lg: "h-14 px-10 text-sm",
};

export function buttonStyles({
    variant = 'primary',
    size = 'md',
    className,
}: ButtonStyleOptions = {}) {
    return cn(baseStyles, variants[variant], sizes[size], className);
}
