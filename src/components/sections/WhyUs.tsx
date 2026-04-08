import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

const reasons = [
    { title: "Sve kod jednog partnera", desc: "Nema pregovaranja s više izvođača." },
    { title: "Kvalitetan i uigran tim", desc: "Zapošljavamo samo provjerene majstore." },
    { title: "Fokus na detalje", desc: "Arhitektonski nadzor s pažnjom na finese." },
    { title: "Poštivanje rokova", desc: "Vaše vrijeme je naš apsolutni prioritet." },
    { title: "Odgovoran pristup", desc: "Radimo kao da je prostor naš vlastiti." }
];

export function WhyUs() {
    return (
        <Section bg="navy" className="py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-2 lg:order-1 relative h-[500px] lg:h-[700px] w-full"
                >
                    {/* Decorative frame */}
                    <div className="absolute -inset-6 border border-white/10 transform -translate-x-6 translate-y-6 z-0"></div>
                    <div className="absolute inset-0 bg-[#0a356c] z-10 overflow-hidden shadow-2xl">
                        <img
                            src="/images/whyus-interior.jpg"
                            alt="Precizna izvedba i detalji"
                            className="w-full h-full object-cover object-center grayscale-[10%] contrast-125 opacity-80"
                        />
                        <div className="absolute inset-0 bg-[var(--color-primary)]/40 mix-blend-multiply"></div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="order-1 lg:order-2"
                >
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Zašto Odabrati Nas</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-10 text-white leading-[1.15]">
                        Ne tražimo prečace,<br />
                        radimo <span className="text-[var(--color-accent)]">kako treba.</span>
                    </h2>

                    <div className="space-y-8">
                        {reasons.map((reason, index) => (
                            <motion.div
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
