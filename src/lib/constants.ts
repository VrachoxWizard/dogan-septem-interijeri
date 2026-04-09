export const BUSINESS = {
    name: 'Dogan Septem – Interijeri',
    legalName: 'Dogan Septem d.o.o.',
    phone: {
        display: '095 796 2728',
        href: 'tel:+385957962728',
    },
    email: 'interijeri@dogan.hr',
    address: {
        street: 'Varaždinska cesta 1',
        city: 'Sesvete',
        postalCode: '10360',
        country: 'HR',
        display: 'Varaždinska cesta 1, 10360 Sesvete',
    },
    area: 'Zagreb i okolica',
    hours: '08:00 – 16:00',
} as const;

export const NAV_LINKS = [
    { name: 'O Nama', href: '#o-nama' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Pristup', href: '#pristup' },
    { name: 'Projekti', href: '#galerija' },
] as const;
