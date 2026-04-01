import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

const steps = [
    { number: '01', title: 'Razumijevanje prostora', desc: 'Započinjemo razumijevanjem vaših potreba, načina korištenja prostora i očekivanja. Analiziramo svaki detalj prije prve linije nacrta.' },
    { number: '02', title: 'Jasna organizacija', desc: 'Slijedi detaljna razrada faza projekta uz jasan vremenski okvir, troškovnik i strogu specifikaciju materijala bez skrivenih troškova.' },
    { number: '03', title: 'Precizna izvedba', desc: 'Izvođenje svih radova obavlja naš stručni tim, uz stalnu direktnu komunikaciju, redovite izvještaje i precizan inženjerski nadzor.' },
    { number: '04', title: 'Završna kvaliteta', desc: 'Detaljan pregled izvedenih radova, besprijekorno čišćenje i predaja prostora spremnog za dugogodišnje optimalno korištenje.' }
];

export function Process() {
    return (
        <Section id="pristup" bg="white" className="py-24 md:py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Naš Pristup</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-8 text-[var(--color-primary)] leading-[1.2]">
                            Mi ne radimo <br className="hidden lg:block" /> po šabloni.
                        </h2>
                        <div className="w-20 h-1 bg-[var(--color-accent)] mb-8"></div>
                        <p className="text-lg text-[var(--color-muted)] font-light leading-relaxed">
                            Svaki projekt započinje dubinskim razumijevanjem vaših potreba.
                            Zatim integriramo organizaciju i izvedbu koja je strogo strukturirana i vremenski kontrolirana.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                <div className="mb-6">
                                    <span className="text-6xl md:text-7xl font-heading font-bold text-[var(--color-surface)] group-hover:text-[var(--color-accent)] transition-colors duration-500 block leading-none">
                                        {step.number}
                                    </span>
                                    <div className="w-12 h-px bg-[var(--color-border-light)] mt-4 group-hover:bg-[var(--color-accent)] transition-colors duration-500"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-heading font-bold text-[var(--color-primary)] mb-3">{step.title}</h3>
                                    <p className="text-[var(--color-muted)] font-light leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
