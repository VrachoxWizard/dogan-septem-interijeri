import type { LucideIcon } from 'lucide-react';
import { Home, Briefcase, Hammer, Waves, Grid, Zap, PaintRoller, ClipboardCheck, Sofa } from 'lucide-react';

export interface Service {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export const services: Service[] = [
    { icon: Home, title: 'Adaptacije stanova', desc: 'Potpune ili djelomične renovacije stambenog prostora.' },
    { icon: Briefcase, title: 'Poslovni prostori', desc: 'Uređenje ureda, lokala i komercijalnih objekata po najvišim standardima.' },
    { icon: Hammer, title: 'Rušenja i priprema', desc: 'Stručno izvođenje svih pripremnih i rušilačkih radova uz odvoz materijala.' },
    { icon: Grid, title: 'Suha gradnja', desc: 'Knauf sustavi, pregradni zidovi, spušteni stropovi i izolacije.' },
    { icon: Waves, title: 'Keramičarski radovi', desc: 'Precizno postavljanje keramike i svih vrsta podnih obloga.' },
    { icon: Zap, title: 'Instalacije', desc: 'Izvođenje moderne elektro i vodoinstalacije sa certifikatima.' },
    { icon: PaintRoller, title: 'Završni radovi', desc: 'Soboslikarski poslovi i besprijekorna estetska završna obrada.' },
    { icon: Sofa, title: 'Montaža namještaja', desc: 'Profesionalna montaža kuhinja, ormara, garderoba i ostalog namještaja po mjeri.' },
    { icon: ClipboardCheck, title: 'Koordinacija', desc: 'Cjelovito vođenje svih faza projekta – vi komunicirate samo s nama.' },
];

export interface GalleryItem {
    src: string;
    label: string;
}

export const galleryItems: GalleryItem[] = [
    { src: '/images/gallery-adaptacija-stana.jpg', label: 'Adaptacija stana' },
    { src: '/images/gallery-poslovni-prostor.jpg', label: 'Uređenje poslovnog prostora' },
    { src: '/images/gallery-kupaonica.jpg', label: 'Moderna kupaonica' },
    { src: '/images/gallery-pripremni-radovi.jpg', label: 'Pripremni radovi' },
    { src: '/images/gallery-zavrsni-interijeri.jpg', label: 'Završni interijeri' },
];

export interface ProcessStep {
    number: string;
    title: string;
    desc: string;
}

export const processSteps: ProcessStep[] = [
    { number: '01', title: 'Razumijevanje prostora', desc: 'Započinjemo razumijevanjem vaših potreba, načina korištenja prostora i očekivanja. Analiziramo svaki detalj prije prve linije nacrta.' },
    { number: '02', title: 'Jasna organizacija', desc: 'Slijedi detaljna razrada faza projekta uz jasan vremenski okvir, troškovnik i strogu specifikaciju materijala bez skrivenih troškova.' },
    { number: '03', title: 'Precizna izvedba', desc: 'Izvođenje svih radova obavlja naš stručni tim, uz stalnu direktnu komunikaciju, redovite izvještaje i precizan inženjerski nadzor.' },
    { number: '04', title: 'Završna kvaliteta', desc: 'Detaljan pregled izvedenih radova, besprijekorno čišćenje i predaja prostora spremnog za dugogodišnje optimalno korištenje.' },
];

export interface WhyUsReason {
    title: string;
    desc: string;
}

export const whyUsReasons: WhyUsReason[] = [
    { title: 'Sve kod jednog partnera', desc: 'Nema pregovaranja s više izvođača.' },
    { title: 'Kvalitetan i uigran tim', desc: 'Zapošljavamo samo provjerene majstore.' },
    { title: 'Fokus na detalje', desc: 'Arhitektonski nadzor s pažnjom na finese.' },
    { title: 'Poštivanje rokova', desc: 'Vaše vrijeme je naš apsolutni prioritet.' },
    { title: 'Odgovoran pristup', desc: 'Radimo kao da je prostor naš vlastiti.' },
];

export interface Audience {
    title: string;
    desc: string;
}

export const audiences: Audience[] = [
    { title: 'Vlasnici stanova i kuća', desc: 'Oprostite se od stresa oko renovacije. Preuzimamo sve u dogovorenim rokovima sa garantiranom kvalitetom.' },
    { title: 'Investitori', desc: 'Glatka i pouzdana egzekucija, uz strogo poštivanje vašeg troškovnika, vizije i rokova dovršetka.' },
    { title: 'Tvrtke i uredi', desc: 'Efikasna adaptacija i prenamjena poslovnih prostora bez nepotrebnog ometanja vašeg poslovanja.' },
    { title: 'Najmodavci', desc: 'Ciljane intervencije i brze adaptacije koje maksimiziraju i podižu vrijednost nekretnine na tržištu.' },
];
