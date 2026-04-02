import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
            >
                {/* Dark overlay for text readability as per reference */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl text-white"
                >
                    <div className="inline-flex items-center gap-4 mb-8 tracking-[0.2em] text-xs font-bold uppercase text-[var(--color-accent)]">
                        <span className="w-12 h-px bg-[var(--color-accent)]"></span>
                        Vrhunske adaptacije
                    </div>
                    <h1 className="font-heading font-bold text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-8">
                        Prostor koji ima smisla. <br />
                        <span className="text-white/90 font-light">Izvedba koja ima standard.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
                        Specijalizirani smo za adaptacije stanova i poslovnih prostora. Kompletna izvedba. Oslonite se na jednog partnera za cijeli projekt.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a href="#kontakt" className="w-full sm:w-auto">
                            <Button variant="accent" size="lg" className="w-full">
                                Zatraži ponudu
                            </Button>
                        </a>
                        <a href="#kontakt" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white hover:text-[var(--color-primary)] hover:border-white">
                                Kontaktiraj nas
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
