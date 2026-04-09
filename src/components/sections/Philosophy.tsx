import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

export function Philosophy() {
    return (
        <Section bg="light-gray" className="py-20 md:py-32 lg:py-48 border-y border-[var(--color-border-light)] overflow-hidden">
            <div className="text-center max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-8">Naša Filozofija</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-[var(--color-primary)] leading-[1.1] mb-12">
                        "Dobar prostor <br className="hidden md:block" />nije samo lijep.<br />
                        Dobar prostor <span className="text-[var(--color-accent)]">funkcionira.</span>"
                    </h2>

                    <div className="w-24 h-px bg-[var(--color-border-light)] mx-auto mb-10"></div>

                    <p className="text-xl md:text-2xl text-[var(--color-muted)] leading-relaxed font-light max-w-3xl mx-auto">
                        Vjerujemo da adaptacija nije trošak, već dugoročno ulaganje.
                        Zato svaki projekt gledamo kroz prizmu vremena:
                        kako će izgledati danas, ali i kako će služiti sutra.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
