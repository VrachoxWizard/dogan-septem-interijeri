import { Section } from '../layout/Section';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    { src: '/images/0015d04c-90a7-4de6-a5e3-2b40718b454e.jpg', label: 'Adaptacija stana' },
    { src: '/images/05b94ee7-f485-48fb-957e-e095075d2bc5.jpg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/123f95dd-f584-43e6-9ac0-f6fb3e775cc5.jpg', label: 'Moderna kupaonica' },
    { src: '/images/151af27c-ca9a-474c-a5d7-f2490e65e626.jpg', label: 'Pripremni radovi' },
    { src: '/images/178dd085-c276-403c-a9e3-3562725d796c.jpg', label: 'Završni interijeri' },
    { src: '/images/1a8b6919-48c0-4df9-b141-bd5e03c508f2.jpg', label: 'Renovacija' },
    { src: '/images/581d37f4-3a7a-40ab-9f37-c9c46b6f4c04.jpg', label: 'Moderni dizajn' },
    { src: '/images/5c1d9666-aa7d-472b-92b9-e6070a37030d.jpg', label: 'Kvalitetna izvedba' },
    { src: '/images/67906144-2b28-4ca5-878d-31fc2ca27338.jpg', label: 'Detalji interijera' },
    { src: '/images/85b11502-e559-4dff-aadc-893f4841b273.jpg', label: 'Adaptacija stana' },
    { src: '/images/86515ac9-5fe4-45d8-8879-48e93ede09b0.jpg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/8b3e0478-2840-410f-9122-82b25956f07c.jpg', label: 'Moderna kupaonica' },
    { src: '/images/9ea47d39-37d8-4182-8832-a39e6f325c66.jpg', label: 'Pripremni radovi' },
    { src: '/images/b955b6fa-16cc-46d8-98f6-456709b23fce.jpg', label: 'Završni interijeri' },
    { src: '/images/c72a9c9a-5452-4d50-8e66-31f527296331.jpg', label: 'Renovacija' },
    { src: '/images/df7667ba-ecee-4e09-893f-7c42719581a0.jpg', label: 'Moderni dizajn' },
    { src: '/images/e98eb810-8209-4a70-83e6-752bee35e0fa.jpg', label: 'Kvalitetna izvedba' },
    { src: '/images/f36e8a39-0577-4116-9588-f404f500c36c.jpg', label: 'Detalji interijera' },
    { src: '/images/WhatsApp Image 2026-03-31 at 20.01.34 (1).jpeg', label: 'Adaptacija stana' },
    { src: '/images/WhatsApp Image 2026-03-31 at 20.01.34 (2).jpeg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/WhatsApp Image 2026-03-31 at 20.01.34.jpeg', label: 'Moderna kupaonica' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.46 (1).jpeg', label: 'Pripremni radovi' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.46 (2).jpeg', label: 'Završni interijeri' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.46 (3).jpeg', label: 'Renovacija' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.46.jpeg', label: 'Moderni dizajn' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (1).jpeg', label: 'Kvalitetna izvedba' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (10).jpeg', label: 'Detalji interijera' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (2).jpeg', label: 'Adaptacija stana' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (3).jpeg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (4).jpeg', label: 'Moderna kupaonica' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (5).jpeg', label: 'Pripremni radovi' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (6).jpeg', label: 'Završni interijeri' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (7).jpeg', label: 'Renovacija' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (8).jpeg', label: 'Moderni dizajn' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47 (9).jpeg', label: 'Kvalitetna izvedba' },
    { src: '/images/WhatsApp Image 2026-04-01 at 12.30.47.jpeg', label: 'Detalji interijera' },
];

export function Gallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    return (
        <Section id="galerija" bg="white" className="overflow-hidden py-24 md:py-32 border-b border-[var(--color-border-light)]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Projekti</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-[var(--color-primary)]">
                        Galerija radova
                    </h2>
                    <div className="w-20 h-1 bg-[var(--color-accent)] mb-6"></div>
                    <p className="text-lg text-[var(--color-muted)] max-w-2xl font-light">
                        Pregled naših recentnih projekata koji najbolje demonstriraju naš standard i beskompromisnu kvalitetu izvedbe.
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={scrollPrev}
                        className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all duration-300 cursor-pointer"
                        aria-label="Prethodna slika"
                    >
                        <ChevronLeft size={24} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all duration-300 cursor-pointer"
                        aria-label="Sljedeća slika"
                    >
                        <ChevronRight size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-8">
                    {galleryItems.map((item, index) => (
                        <div className="flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] pl-8 min-w-0" key={index}>
                            <div className="group relative h-[450px] w-full overflow-hidden bg-[var(--color-surface)] cursor-grab active:cursor-grabbing border border-[var(--color-border-light)]">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="w-10 h-px bg-[var(--color-accent)] mb-4"></div>
                                    <span className="text-white font-heading font-bold text-2xl tracking-wide">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
