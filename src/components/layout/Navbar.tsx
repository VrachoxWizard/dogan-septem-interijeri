import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const navLinks = [
    { name: 'O Nama', href: '#o-nama' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Pristup', href: '#pristup' },
    { name: 'Projekti', href: '#galerija' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    mobileMenuOpen
                        ? "bg-[var(--color-background)] shadow-sm py-4"
                        : isScrolled
                            ? "bg-[var(--color-background)]/95 backdrop-blur-md shadow-sm py-4"
                            : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
                    <a href="#" className="flex-shrink-0 z-50 pt-1" onClick={() => setMobileMenuOpen(false)}>
                        <span className={cn(
                            "font-heading font-bold text-2xl md:text-3xl tracking-tight transition-colors",
                            isScrolled || mobileMenuOpen ? "text-[var(--color-primary)]" : "text-white"
                        )}>
                            DOGAN SEPTEM
                        </span>
                        <span className={cn(
                            "block text-sm md:text-[0.95rem] font-semibold tracking-[0.25em] mt-0.5 transition-colors",
                            isScrolled || mobileMenuOpen ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"
                        )}>
                            INTERIJERI
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
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
                        className={cn(
                            "md:hidden p-2 z-50 transition-colors cursor-pointer",
                            isScrolled || mobileMenuOpen ? "text-[var(--color-primary)]" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay completely outside header so it escapes the backdrop-filter stacking context */}
            <div className={cn(
                "md:hidden fixed inset-0 z-40 transition-all duration-300 flex flex-col justify-center pt-20 bg-[var(--color-background)]",
                mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            )}>
                <div className="px-6 py-10 flex flex-col space-y-6 items-center overflow-y-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
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
