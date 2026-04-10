import { useRef, useState, type FormEvent } from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS } from '../../lib/constants';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() ?? '';

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormData {
    name: string;
    contact: string;
    project: string;
    message: string;
}

type ParsedContact =
    | { kind: 'email'; value: string; email: string; replyto: string }
    | { kind: 'phone'; value: string; phone: string };

const initialFormData: ContactFormData = {
    name: '',
    contact: '',
    project: '',
    message: '',
};

function normalizeWhitespace(value: string) {
    return value.trim().replace(/\s+/g, ' ');
}

function parseContact(value: string): ParsedContact | null {
    const normalized = normalizeWhitespace(value);

    if (!normalized) return null;

    const normalizedEmail = normalized.toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(normalizedEmail)) {
        return {
            kind: 'email',
            value: normalizedEmail,
            email: normalizedEmail,
            replyto: normalizedEmail,
        };
    }

    const phonePattern = /^[+]?[\d\s()./-]+$/;
    const digitCount = normalized.replace(/\D/g, '').length;

    if (phonePattern.test(normalized) && digitCount >= 6) {
        return {
            kind: 'phone',
            value: normalized,
            phone: normalized,
        };
    }

    return null;
}

export function Contact() {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [status, setStatus] = useState<SubmissionStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const nameInputRef = useRef<HTMLInputElement>(null);

    const statusMessage =
        status === 'loading'
            ? 'Šaljemo vaš upit.'
            : status === 'success'
                ? 'Upit je uspješno poslan.'
                : '';

    const updateField = <Field extends keyof ContactFormData>(field: Field, value: ContactFormData[Field]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        if (status === 'error') {
            setStatus('idle');
            setErrorMsg('');
        }
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const normalizedName = normalizeWhitespace(formData.name);
        const normalizedProject = normalizeWhitespace(formData.project);
        const normalizedMessage = formData.message.trim();
        const parsedContact = parseContact(formData.contact);
        const honeypotValue = new FormData(form).get('botcheck')?.toString().trim();

        if (honeypotValue) {
            setStatus('success');
            setErrorMsg('');
            setFormData(initialFormData);
            form.reset();
            return;
        }

        if (!WEB3FORMS_ACCESS_KEY) {
            setStatus('error');
            setErrorMsg('Obrazac trenutno nije dostupan. Kontaktirajte nas telefonom ili emailom.');
            return;
        }

        if (normalizedName.length < 2) {
            setStatus('error');
            setErrorMsg('Unesite ime i prezime kako bismo znali kome odgovaramo.');
            return;
        }

        if (!parsedContact) {
            setStatus('error');
            setErrorMsg('Unesite ispravan email ili broj telefona za povratni kontakt.');
            return;
        }

        if (normalizedMessage.length < 10) {
            setStatus('error');
            setErrorMsg('Poruka treba sadržavati barem 10 znakova kako bismo mogli procijeniti upit.');
            return;
        }

        setStatus('loading');
        setErrorMsg('');

        try {
            const requestBody = new FormData(form);
            requestBody.set('access_key', WEB3FORMS_ACCESS_KEY);
            requestBody.set('subject', `Novi upit – ${normalizedProject || 'Općenito'}`);
            requestBody.set('from_name', normalizedName);
            requestBody.set('name', normalizedName);
            requestBody.set('project', normalizedProject);
            requestBody.set('message', normalizedMessage);
            requestBody.set('contact', parsedContact.value);
            requestBody.set('contact_type', parsedContact.kind);
            requestBody.set('botcheck', honeypotValue ?? '');

            if (parsedContact.kind === 'email') {
                requestBody.set('email', parsedContact.email);
                requestBody.set('replyto', parsedContact.replyto);
            } else {
                requestBody.set('phone', parsedContact.phone);
                requestBody.delete('email');
                requestBody.delete('replyto');
            }

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: requestBody,
            });

            const data = await res.json() as { success?: boolean; message?: string };

            if (res.ok && data.success) {
                setStatus('success');
                setFormData(initialFormData);
                form.reset();
            } else {
                setStatus('error');
                setErrorMsg(data.message || 'Došlo je do greške. Pokušajte ponovo.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Mrežna greška. Provjerite internetsku vezu i pokušajte ponovo.');
        }
    }

    return (
        <Section id="kontakt" bg="white" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Besplatna procjena</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-[var(--color-primary)]">
                        Kreirajmo prostor zajedno
                    </h2>
                    <p className="text-lg text-[var(--color-muted)] font-light max-w-2xl mx-auto">
                        Ako razmišljate o adaptaciji ili kompletnom preuređenju prostora, javite nam se.
                        Zajedno ćemo pronaći najbolje rješenje za vaš budžet i viziju.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        <div className="sr-only" aria-live="polite">{statusMessage}</div>
                        <div className="sr-only" aria-live="assertive">{status === 'error' ? errorMsg : ''}</div>

                        {status === 'success' ? (
                            <div
                                role="status"
                                aria-live="polite"
                                className="bg-white p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border-light)] relative z-10 text-center py-20"
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" strokeWidth={1.5} aria-hidden="true" />
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-4">Upit je poslan!</h3>
                                <p className="text-[var(--color-muted)] font-light mb-8">Hvala vam na povjerenju. Odgovorit ćemo vam u najkraćem mogućem roku.</p>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="md"
                                    onClick={() => {
                                        setStatus('idle');
                                        setErrorMsg('');
                                        setFormData(initialFormData);
                                        requestAnimationFrame(() => {
                                            nameInputRef.current?.focus();
                                        });
                                    }}
                                >
                                    Pošalji novi upit
                                </Button>
                            </div>
                        ) : (
                            <form
                                className="bg-white p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border-light)] relative z-10"
                                onSubmit={handleSubmit}
                                aria-busy={status === 'loading'}
                            >
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-8">Pošaljite nam upit</h3>

                                <input type="text" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                                {status === 'error' && (
                                    <div role="alert" className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                                        {errorMsg}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="relative">
                                        <input
                                            ref={nameInputRef}
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            minLength={2}
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)]"
                                            placeholder="Ime i prezime"
                                        />
                                        <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Ime i prezime</label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="contact"
                                            name="contact"
                                            required
                                            autoComplete="off"
                                            inputMode="text"
                                            aria-describedby="contact-help"
                                            value={formData.contact}
                                            onChange={(e) => updateField('contact', e.target.value)}
                                            className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)]"
                                            placeholder="Telefon ili email"
                                        />
                                        <label htmlFor="contact" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Telefon ili email</label>
                                        <p id="contact-help" className="mt-3 text-sm text-[var(--color-muted)] font-light">
                                            Upišite email adresu ili broj telefona za povratni kontakt.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative mb-10 mt-6">
                                    <select
                                        id="project"
                                        name="project"
                                        required
                                        value={formData.project}
                                        onChange={(e) => updateField('project', e.target.value)}
                                        className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] outline-none transition-colors text-[var(--color-foreground)] appearance-none rounded-none font-light"
                                    >
                                        <option value="" disabled hidden>Odaberite vrstu radova</option>
                                        <option value="Adaptacija" className="text-black">Adaptacija</option>
                                        <option value="Soboslikarski radovi" className="text-black">Soboslikarski radovi</option>
                                        <option value="Gipskartonski radovi" className="text-black">Gipskartonski radovi</option>
                                        <option value="Elektroinstalacije" className="text-black">Elektroinstalacije</option>
                                        <option value="Voda i odvodnja" className="text-black">Voda i odvodnja</option>
                                        <option value="Postavljanje laminata i vinil podova" className="text-black">Postavljanje laminata i vinil podova</option>
                                        <option value="Montaža namještaja" className="text-black">Montaža namještaja</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                        <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                    <label htmlFor="project" className="absolute left-0 -top-5 text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">Vrsta projekta</label>
                                </div>

                                <div className="relative mb-12 mt-6">
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        minLength={10}
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => updateField('message', e.target.value)}
                                        className="peer w-full pt-4 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)] resize-none"
                                        placeholder="Vaša poruka"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Vaša poruka i detalji</label>
                                </div>

                                <Button type="submit" variant="accent" size="lg" className="w-full text-base shadow-sm" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'ŠALJEM...' : 'POŠALJI UPIT'}
                                </Button>
                            </form>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-10"
                    >
                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <Phone className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Telefon</span>
                                <a href={BUSINESS.phone.href} className="text-2xl font-heading font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                                    {BUSINESS.phone.display}
                                </a>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">Dostupni smo od {BUSINESS.hours}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <Mail className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Email</span>
                                <a href={`mailto:${BUSINESS.email}`} className="text-lg md:text-xl font-heading font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors break-all">
                                    {BUSINESS.email}
                                </a>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">Odgovaramo unutar 24 sata</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} aria-hidden="true" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Adresa / Regija</span>
                                <span className="block text-xl font-heading font-medium text-[var(--color-primary)]">
                                    {BUSINESS.address.display}
                                </span>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">
                                    Poslujemo na području {BUSINESS.area}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
