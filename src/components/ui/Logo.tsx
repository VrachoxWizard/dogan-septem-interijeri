import { cn } from '../../lib/utils';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

export function Logo({ variant = 'light', className }: LogoProps) {
    const isLight = variant === 'light';

    return (
        <div className={cn('relative flex items-center gap-3 select-none', className)}>
            {/* Corner accent box */}
            <div className="relative flex-shrink-0">
                <div
                    className={cn(
                        'w-10 h-10 relative',
                        isLight ? 'border-[var(--color-accent)]' : 'border-[var(--color-accent)]'
                    )}
                >
                    {/* Top-left corner */}
                    <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[var(--color-accent)]" />
                    {/* Bottom-right corner */}
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[var(--color-accent)]" />
                    {/* DS monogram */}
                    <span
                        className={cn(
                            'absolute inset-0 flex items-center justify-center font-heading font-black text-sm leading-none tracking-tight',
                            isLight ? 'text-white' : 'text-[var(--color-primary)]'
                        )}
                    >
                        DS
                    </span>
                </div>
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
