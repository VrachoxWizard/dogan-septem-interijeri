import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

export function About() {
    return (
        <Section id="o-nama" bg="white" className="py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">O Nama</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-[var(--color-primary)] leading-[1.15]">
                        Više od klasične adaptacije prostora.
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--color-muted)] leading-relaxed font-light">
                        <p>
                            <strong className="font-semibold text-[var(--color-primary)]">Dogan septem – interijeri</strong> nastao je iz potrebe da tržištu ponudimo
                            nešto više od klasične adaptacije.
                        </p>
                        <p>
                            Naš pristup nije samo izvođenje radova, već promišljanje prostora kao cjeline.
                            Svaki stan, poslovni prostor ili objekt koji preuzmemo gledamo kroz funkcionalnost,
                            dugoročnu vrijednost i estetiku koja ima smisla.
                        </p>
                        <p>
                            Okupili smo kvalitetan i pouzdan kadar za sva područja izvođenja, što nam omogućava
                            da svaki projekt vodimo kontrolirano, precizno i bez kompromisa.
                        </p>
                        <div className="mt-12 pt-8 border-t border-[var(--color-border-light)]">
                            <p className="text-2xl font-heading font-light text-[var(--color-primary)] leading-snug">
                                "Naš cilj nije samo završiti projekt. <br />
                                <span className="font-semibold">Naš cilj je napraviti prostor u kojem će se osjećati razlika.</span>"
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-[600px] w-full mt-10 lg:mt-0"
                >
                    {/* Decorative architectural frame */}
                    <div className="absolute -inset-6 border border-[var(--color-border-light)] transform translate-x-6 translate-y-6 z-0"></div>
                    <div className="absolute inset-0 bg-[var(--color-surface)] z-10 overflow-hidden shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1000"
                            alt="Adaptacija interijera"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
