import { Section } from '../layout/Section';
import { Home, Briefcase, Hammer, Waves, Grid, Zap, PaintRoller, ClipboardCheck, Sofa } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    { icon: Home, title: 'Adaptacije stanova', desc: 'Potpune ili djelomične renovacije stambenog prostora.' },
    { icon: Briefcase, title: 'Poslovni prostori', desc: 'Uređenje ureda, lokala i komercijalnih objekata po najvišim standardima.' },
    { icon: Hammer, title: 'Rušenja i priprema', desc: 'Stručno izvođenje svih pripremnih i rušilačkih radova uz odvoz materijala.' },
    { icon: Grid, title: 'Suha gradnja', desc: 'Knauf sustavi, pregradni zidovi, spušteni stropovi i izolacije.' },
    { icon: Waves, title: 'Keramičarski radovi', desc: 'Precizno postavljanje keramike i svih vrsta podnih obloga.' },
    { icon: Zap, title: 'Instalacije', desc: 'Izvođenje moderne elektro i vodoinstalacije sa certifikatima.' },
    { icon: PaintRoller, title: 'Završni radovi', desc: 'Soboslikarski poslovi i besprijekorna estetska završna obrada.' },
    { icon: Sofa, title: 'Montaža namještaja', desc: 'Profesionalna montaža kuhinja, ormara, garderoba i ostalog namještaja po mjeri.' },
    { icon: ClipboardCheck, title: 'Koordinacija', desc: 'Cjelovito vođenje svih faza projekta – vi komunicirate samo sa nama.' }
];

export function Services() {
    return (
        <Section id="usluge" bg="light-gray" className="pb-24 pt-0 mt-20 relative">
            <div className="absolute top-0 left-0 right-0 h-40 bg-white"></div>

            <div className="text-center max-w-4xl mx-auto mb-20 bg-white py-16 px-6 lg:px-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border-light)] relative z-10 transform -translate-y-12">
                <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Naše Usluge</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-[var(--color-primary)]">
                    Sve na jednom mjestu
                </h2>
                <p className="text-lg text-[var(--color-muted)] font-light max-w-2xl mx-auto">
                    Nudimo kompletnu uslugu adaptacije i uređenja, bez stresa i pregovaranja s deset različitih izvođača.
                </p>
            </div>

            <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-default relative"
                        >
                            <div className="mb-6 inline-flex relative">
                                <div className="relative z-10 w-16 h-16 bg-white border border-[var(--color-border-light)] shadow-sm flex items-center justify-center group-hover:-translate-y-1 group-hover:border-[var(--color-accent)] transition-all duration-300">
                                    <service.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} />
                                </div>
                                <div className="absolute w-16 h-16 bg-[var(--color-border-light)] top-2 left-2 z-0 group-hover:bg-[var(--color-accent)]/20 transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">{service.title}</h3>
                            <p className="text-[var(--color-muted)] font-light leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
