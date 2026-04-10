import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { buttonStyles } from '../ui/buttonStyles';
import { Logo } from '../ui/Logo';
import { cn } from '../../lib/utils';
import { NAV_LINKS } from '../../lib/constants';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const wasMenuOpenRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const syncScrollState = () => {
            handleScroll();
        };

        handleScroll();

        const frame = window.requestAnimationFrame(syncScrollState);
        const timeoutId = window.setTimeout(syncScrollState, 0);

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('load', syncScrollState);
        window.addEventListener('hashchange', syncScrollState);

        return () => {
            window.cancelAnimationFrame(frame);
            window.clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', syncScrollState);
            window.removeEventListener('hashchange', syncScrollState);
        };
    }, []);

    useEffect(() => {
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');
        const inertTargets = [main, footer].filter((element): element is HTMLElement => element instanceof HTMLElement);

        if (mobileMenuOpen) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';

            inertTargets.forEach((element) => {
                element.inert = true;
                element.setAttribute('aria-hidden', 'true');
            });

            const focusFirstLink = () => {
                firstLinkRef.current?.focus();
            };
            const frame = window.requestAnimationFrame(focusFirstLink);
            const timeoutId = window.setTimeout(focusFirstLink, 50);

            wasMenuOpenRef.current = true;

            return () => {
                window.cancelAnimationFrame(frame);
                window.clearTimeout(timeoutId);
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';

                inertTargets.forEach((element) => {
                    element.inert = false;
                    element.removeAttribute('aria-hidden');
                });
            };
        }

        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';

        inertTargets.forEach((element) => {
            element.inert = false;
            element.removeAttribute('aria-hidden');
        });

        if (wasMenuOpenRef.current) {
            hamburgerRef.current?.focus();
            wasMenuOpenRef.current = false;
        }

        return () => {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';

            inertTargets.forEach((element) => {
                element.inert = false;
                element.removeAttribute('aria-hidden');
            });
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (!mobileMenuOpen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                setMobileMenuOpen(false);
                return;
            }

            if (e.key !== 'Tab') return;

            const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );

            if (!focusableElements?.length) {
                e.preventDefault();
                hamburgerRef.current?.focus();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            const activeElement = document.activeElement;

            if (e.shiftKey && activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                data-menu-open={mobileMenuOpen ? 'true' : 'false'}
                data-scrolled={isScrolled ? 'true' : 'false'}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    mobileMenuOpen
                        ? "bg-[var(--color-background)] shadow-sm py-2"
                        : isScrolled
                            ? "bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm py-2"
                            : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                    <a href="#top" aria-label="Početak stranice" className="flex-shrink-0 z-50" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                    </a>

                    <nav className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-semibold transition-colors hover:text-[var(--color-accent)]",
                                            isScrolled ? "text-[var(--color-foreground)]" : "text-white"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="#kontakt" className={buttonStyles({ variant: 'accent', size: 'md' })}>
                            Zatraži ponudu
                        </a>
                    </nav>

                    <button
                        ref={hamburgerRef}
                        type="button"
                        className={cn(
                            "lg:hidden p-3 min-w-[44px] min-h-[44px] z-50 transition-colors cursor-pointer flex items-center justify-center",
                            isScrolled || mobileMenuOpen ? "text-[var(--color-primary)]" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Zatvori navigaciju' : 'Otvori navigaciju'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            <div
                id="mobile-menu"
                ref={mobileMenuRef}
                role={mobileMenuOpen ? 'dialog' : undefined}
                aria-modal={mobileMenuOpen ? true : undefined}
                aria-hidden={mobileMenuOpen ? undefined : true}
                aria-label={mobileMenuOpen ? 'Navigacija' : undefined}
                className={cn(
                    "lg:hidden fixed inset-0 z-40 transition-all duration-300 flex flex-col justify-center pt-16 bg-[var(--color-background)]",
                    mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                <div className="px-6 py-10 flex flex-col space-y-6 items-center overflow-y-auto">
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.name}
                            ref={i === 0 ? firstLinkRef : undefined}
                            href={link.href}
                            className="text-2xl font-heading font-bold text-center text-[var(--color-primary)] py-2 hover:text-[var(--color-accent)] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-8 w-full flex justify-center">
                        <a
                            href="#kontakt"
                            className={buttonStyles({ variant: 'accent', size: 'lg', className: 'w-full max-w-xs justify-center' })}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Zatraži ponudu
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
