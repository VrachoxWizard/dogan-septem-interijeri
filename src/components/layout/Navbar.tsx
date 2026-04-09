import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { cn } from '../../lib/utils';
import { NAV_LINKS } from '../../lib/constants';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            firstLinkRef.current?.focus();
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    // ESC key to close mobile menu
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape' && mobileMenuOpen) {
                setMobileMenuOpen(false);
                hamburgerRef.current?.focus();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [mobileMenuOpen]);

    return (
        <>
            <header
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
                    <a href="#" className="flex-shrink-0 z-50" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                    </a>

                    {/* Desktop Nav */}
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
                        <a href="#kontakt">
                            <Button variant="accent" size="md">Zatraži ponudu</Button>
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        ref={hamburgerRef}
                        className={cn(
                            "lg:hidden p-3 min-w-[44px] min-h-[44px] z-50 transition-colors cursor-pointer flex items-center justify-center",
                            isScrolled || mobileMenuOpen ? "text-[var(--color-primary)]" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay completely outside header so it escapes the backdrop-filter stacking context */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal={mobileMenuOpen}
                aria-label="Navigacija"
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
                        <a href="#kontakt" className="w-full flex justify-center" onClick={() => setMobileMenuOpen(false)}>
                            <Button variant="accent" size="lg" className="w-full max-w-xs">Zatraži ponudu</Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
