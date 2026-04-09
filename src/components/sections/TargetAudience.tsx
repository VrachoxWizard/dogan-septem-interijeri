import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { audiences } from '../../lib/data';

export function TargetAudience() {
    return (
        <Section id="za-koga" bg="white" className="py-24 md:py-32">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Za koga radimo</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-[var(--color-primary)]">
                    Pravi pristup za svaki projekt
                </h2>
                <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-8"></div>
                <p className="text-lg text-[var(--color-muted)] font-light max-w-2xl mx-auto">
                    Bez obzira na specifičnost i veličinu projekta, naš pristup izvedbi i kontroli kvalitete ostaje jednako rigorozan.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {audiences.map((audience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col h-full bg-[var(--color-surface)] p-6 sm:p-8 md:p-12 group hover:bg-[var(--color-primary)] active:bg-[var(--color-primary)] transition-colors duration-500"
                    >
                        <div className="w-10 h-px bg-[var(--color-accent)] mb-6 group-hover:bg-white group-active:bg-white transition-colors duration-500"></div>
                        <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-4 group-hover:text-white group-active:text-white transition-colors duration-500">{audience.title}</h3>
                        <p className="text-[var(--color-muted)] font-light leading-relaxed group-hover:text-gray-300 group-active:text-gray-300 transition-colors duration-500 flex-grow">{audience.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
