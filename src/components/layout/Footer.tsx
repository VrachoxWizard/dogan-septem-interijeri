
import { Logo } from '../ui/Logo';
import { BUSINESS } from '../../lib/constants';

export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="md:col-span-5 lg:col-span-4">
                        <Logo size="footer" className="mb-6" />
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                            Prostor koji ima smisla. Izvedba koja ima standard. Kompletne adaptacije i uređenje interijera.
                        </p>
                    </div>

                    <div className="md:col-span-3 lg:col-span-3 lg:col-start-6">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white">Kontakt</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Telefon</span>
                                <a href={BUSINESS.phone.href} className="font-medium hover:text-white transition-colors text-base">{BUSINESS.phone.display}</a>
                            </li>
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Email</span>
                                <a href={`mailto:${BUSINESS.email}`} className="font-medium hover:text-white transition-colors text-base">{BUSINESS.email}</a>
                            </li>
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Adresa</span>
                                <span className="font-medium text-base">{BUSINESS.address.display}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white">Usluge</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="#usluge" className="hover:text-white transition-colors">Adaptacije stanova</a></li>
                            <li><a href="#usluge" className="hover:text-white transition-colors">Poslovni prostori</a></li>
                            <li><a href="#usluge" className="hover:text-white transition-colors">Keramičarski radovi</a></li>
                            <li><a href="#usluge" className="hover:text-white transition-colors">Suha gradnja</a></li>
                            <li><a href="#usluge" className="hover:text-white transition-colors">Koordinacija projekta</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {BUSINESS.legalName}. Sva prava pridržana.</p>
                </div>
            </div>
        </footer>
    );
}
