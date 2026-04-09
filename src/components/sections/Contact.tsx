import { useState, type FormEvent } from 'react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export function Contact() {
    const [formData, setFormData] = useState({ name: '', contact: '', project: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Novi upit – ${formData.project || 'Općenito'}`,
                    from_name: formData.name,
                    ...formData,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setFormData({ name: '', contact: '', project: '', message: '' });
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
                    <span className="block text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-4">Besplatna Procjena</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-[var(--color-primary)]">
                        Kreirajmo prostor zajedno
                    </h2>
                    <p className="text-lg text-[var(--color-muted)] font-light max-w-2xl mx-auto">
                        Ako razmišljate o adaptaciji ili kompletnom preuređenju prostora, javite nam se.
                        Zajedno ćemo pronaći najbolje rješenje za vaš budžet i viziju.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7"
                    >
                        {status === 'success' ? (
                            <div className="bg-white p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border-light)] relative z-10 text-center py-20">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" strokeWidth={1.5} />
                                <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-4">Upit je poslan!</h3>
                                <p className="text-[var(--color-muted)] font-light mb-8">Hvala vam na povjerenju. Odgovoriti ćemo vam u najkraćem mogućem roku.</p>
                                <Button type="button" variant="outline" size="md" onClick={() => setStatus('idle')}>
                                    Pošalji novi upit
                                </Button>
                            </div>
                        ) : (
                        <form className="bg-white p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[var(--color-border-light)] relative z-10" onSubmit={handleSubmit}>
                            <h3 className="text-2xl font-heading font-bold text-[var(--color-primary)] mb-8">Pošaljite nam upit</h3>

                            {status === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="relative">
                                    <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)]" placeholder="Ime i prezime" />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Ime i prezime</label>
                                </div>
                                <div className="relative">
                                    <input type="text" id="contact" name="contact" required autoComplete="email" value={formData.contact} onChange={(e) => setFormData(prev => ({ ...prev, contact: e.target.value }))} className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)]" placeholder="Telefon ili email" />
                                    <label htmlFor="contact" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Telefon ili email</label>
                                </div>
                            </div>

                            <div className="relative mb-10 mt-6">
                                <select id="project" name="project" required value={formData.project} onChange={(e) => setFormData(prev => ({ ...prev, project: e.target.value }))} className="peer w-full h-12 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] outline-none transition-colors text-[var(--color-foreground)] appearance-none rounded-none font-light">
                                    <option value="" disabled hidden>Odaberite vrstu radova</option>
                                    <option value="Adaptacija stana" className="text-black">Adaptacija stana</option>
                                    <option value="Adaptacija poslovnog prostora" className="text-black">Adaptacija poslovnog prostora</option>
                                    <option value="Adaptacija kupaonice" className="text-black">Adaptacija kupaonice</option>
                                    <option value="Ostali radovi" className="text-black">Ostali radovi</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                                <label htmlFor="project" className="absolute left-0 -top-5 text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">Vrsta projekta</label>
                            </div>

                            <div className="relative mb-12 mt-6">
                                <textarea id="message" name="message" required rows={4} value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} className="peer w-full pt-4 bg-transparent border-b border-[var(--color-border-light)] focus:border-[var(--color-accent)] placeholder-transparent outline-none transition-colors text-[var(--color-foreground)] resize-none" placeholder="Vaša poruka"></textarea>
                                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-[var(--color-muted)] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--color-accent)] font-medium uppercase tracking-wider">Vaša poruka i detalji</label>
                            </div>

                            <Button type="submit" variant="accent" size="lg" className="w-full text-base shadow-sm" disabled={status === 'loading'}>
                                {status === 'loading' ? 'ŠALJEM...' : 'POŠALJI UPIT'}
                            </Button>
                        </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-10"
                    >
                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <Phone className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Telefon</span>
                                <a href="tel:0957962728" className="text-2xl font-heading font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                                    095 796 2728
                                </a>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">Dostupni smo od 08:00 do 16:00</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <Mail className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Email</span>
                                <a href="mailto:interijeri@dogan.hr" className="text-lg md:text-xl font-heading font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors break-all">
                                    interijeri@dogan.hr
                                </a>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">Odgovaramo unutar 24 sata</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-14 h-14 bg-white border border-[var(--color-border-light)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-accent)] transition-colors duration-300">
                                <MapPin className="w-6 h-6 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Adresa / Regija</span>
                                <span className="block text-xl font-heading font-medium text-[var(--color-primary)]">
                                    Varaždinska cesta 1, 10360 Sesvete
                                </span>
                                <span className="block text-sm text-[var(--color-muted)] font-light mt-1">
                                    Poslujemo na području Zagreba i okolice
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
