import { Section } from '../layout/Section';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
    { src: '/images/gallery-adaptacija-stana.jpg', label: 'Adaptacija stana' },
    { src: '/images/gallery-poslovni-prostor.jpg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/gallery-kupaonica.jpg', label: 'Moderna kupaonica' },
    { src: '/images/gallery-pripremni-radovi.jpg', label: 'Pripremni radovi' },
    { src: '/images/gallery-zavrsni-interijeri.jpg', label: 'Završni interijeri' },
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
                        Pregled naših recentnih projekata koji najbolje demonstriraju naš standard.
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
                            <div className="group relative h-[300px] md:h-[400px] lg:h-[450px] w-full overflow-hidden bg-[var(--color-surface)] cursor-grab active:cursor-grabbing border border-[var(--color-border-light)]">
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
