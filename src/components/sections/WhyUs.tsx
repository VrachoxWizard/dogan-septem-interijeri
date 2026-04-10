import { useState } from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { whyUsReasons } from '../../lib/data';

export function WhyUs() {
    const [imageUnavailable, setImageUnavailable] = useState(false);

    return (
        <Section id="zasto-mi" bg="navy" className="py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-2 lg:order-1 relative h-[350px] md:h-[500px] lg:h-[700px] w-full"
                >
                    <div className="absolute -inset-6 border border-white/10 transform -translate-x-6 translate-y-6 z-0 hidden md:block"></div>
                    <div className="absolute inset-0 bg-[#0a356c] z-10 overflow-hidden shadow-2xl">
                        {imageUnavailable ? (
                            <div className="flex h-full items-end bg-gradient-to-br from-[#0a356c] via-[var(--color-primary)] to-[#08284f] p-8 md:p-10">
                                <div>
                                    <span className="block text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Vizual privremeno nedostupan</span>
                                    <p className="max-w-sm text-lg font-light text-gray-300">
                                        Fotografija projekta nije učitana, ali ključne informacije o našem pristupu ostaju dostupne.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <img
                                    src="/images/whyus-interior.jpg"
                                    alt="Precizna izvedba i detalji"
                                    className="w-full h-full object-cover object-center grayscale-[10%] contrast-125 opacity-80"
                                    loading="lazy"
                                    onError={() => setImageUnavailable(true)}
                                />
                                <div className="absolute inset-0 bg-[var(--color-primary)]/40 mix-blend-multiply"></div>
                            </>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2"
                >
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Zašto odabrati nas</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-10 text-white leading-[1.15]">
                        Ne tražimo prečace,<br />
                        radimo <span className="text-[var(--color-accent)]">kako treba.</span>
                    </h2>

                    <ol className="space-y-8 list-none">
                        {whyUsReasons.map((reason, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="mt-1 w-8 h-8 rounded-none border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] transition-all duration-300">
                                    <div className="w-1.5 h-1.5 bg-white"></div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-heading font-bold text-white mb-1">{reason.title}</h4>
                                    <p className="text-gray-400 font-light">{reason.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </motion.div>
            </div>
        </Section>
    );
}
