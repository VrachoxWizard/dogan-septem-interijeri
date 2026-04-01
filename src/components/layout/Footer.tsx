
export function Footer() {
    return (
        <footer className="bg-[var(--color-primary)] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="md:col-span-5 lg:col-span-4">
                        <h3 className="font-heading font-bold text-3xl mb-2 tracking-tight">
                            DOGAN SEPTEM
                        </h3>
                        <span className="block text-sm font-medium text-[var(--color-accent)] tracking-widest mb-6">
                            INTERIJERI
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
                            Prostor koji ima smisla. Izvedba koja ima standard. Kompletne adaptacije i uređenje interijera.
                        </p>
                    </div>

                    <div className="md:col-span-3 lg:col-span-3 lg:col-start-6">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white">Kontakt</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Telefon</span>
                                <a href="tel:[POSLOVNI_BROJ]" className="font-medium hover:text-white transition-colors text-base">[POSLOVNI_BROJ]</a>
                            </li>
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Email</span>
                                <a href="mailto:[POSLOVNI_EMAIL]" className="font-medium hover:text-white transition-colors text-base">[POSLOVNI_EMAIL]</a>
                            </li>
                            <li>
                                <span className="block text-gray-400 mb-1 text-xs uppercase tracking-wider">Adresa</span>
                                <span className="font-medium text-base">[ADRESA]</span>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white">Usluge</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="hover:text-white transition-colors cursor-pointer">Adaptacije stanova</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Poslovni prostori</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Keramičarski radovi</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Suha gradnja</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Koordinacija projekta</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Dogan Septem d.o.o. Sva prava pridržana.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
                        <a href="#" className="hover:text-white transition-colors">Uvjeti korištenja</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
