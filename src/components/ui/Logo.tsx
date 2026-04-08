import { cn } from '../../lib/utils';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

export function Logo({ variant = 'light', className }: LogoProps) {
    const isLight = variant === 'light';

    return (
        <div
            className={cn(
                'relative inline-flex items-center gap-3 select-none px-3 py-2',
                isLight
                    ? 'border border-white/20'
                    : 'border border-[var(--color-primary)]/25',
                className
            )}
        >
            {/* Top-left corner accent */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)]" />
            {/* Bottom-right corner accent */}
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)]" />

            {/* DS monogram box */}
            <div
                className={cn(
                    'flex-shrink-0 w-9 h-9 flex items-center justify-center border',
                    isLight
                        ? 'border-white/30 bg-white/5'
                        : 'border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5'
                )}
            >
                <span
                    className={cn(
                        'font-heading font-black text-sm leading-none tracking-tight',
                        isLight ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent)]'
                    )}
                >
                    DS
                </span>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
                <span
                    className={cn(
                        'font-heading font-bold leading-none tracking-tight text-xl md:text-2xl',
                        isLight ? 'text-white' : 'text-[var(--color-primary)]'
                    )}
                >
                    DOGAN SEPTEM
                </span>
                <span className="text-[var(--color-accent)] text-[0.6rem] font-semibold tracking-[0.3em] uppercase mt-1">
                    INTERIJERI
                </span>
            </div>
        </div>
    );
}
