'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Page from './ui/Page';

const initial = [
  { id: 1, name: 'Nenek Sri', message: 'Selamat datang cucuku sayang, semoga jadi anak sholehah.' },
  { id: 2, name: 'Tante Rina', message: 'Sehat selalu ya nak, tumbuh ceria penuh berkah. Aamiin.' },
];

// Halaman 8: buku tamu ucapan & doa.
export default function WishesForm() {
  const [wishes, setWishes] = useState(initial);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((p) => [{ id: Date.now(), name: form.name.trim(), message: form.message.trim() }, ...p]);
    setForm({ name: '', message: '' });
  };

  const field = 'w-full rounded-xl border-2 border-rose/40 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose-deep';
  const lab = 'mb-1 block text-xs font-bold uppercase tracking-wide text-muted';

  return (
    <Page chapter="Pesan Sahabat" pageNo="Halaman 8">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Doa &amp; Ucapan</h2>

      <form onSubmit={submit} className="mt-6 space-y-3">
        <div>
          <label htmlFor="doa-nama" className={lab}>Nama</label>
          <input id="doa-nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama Anda" autoComplete="name" maxLength={60} className={field} required />
        </div>
        <div>
          <label htmlFor="doa-pesan" className={lab}>Doa untuk si kecil</label>
          <textarea id="doa-pesan" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tulis doa untuk si kecil…" rows={3} maxLength={500} className={`${field} resize-none`} required />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-rose-deep px-6 py-3 text-sm font-bold text-cream transition hover:bg-ink">
          <Send size={15} aria-hidden="true" /> Kirim Doa
        </button>
      </form>

      <div className="mt-6 space-y-3" aria-live="polite">
        {wishes.map((w) => (
          <div key={w.id} className="rounded-2xl bg-blush/40 p-4">
            <p className="font-display font-bold text-ink">{w.name}</p>
            <p className="mt-1 font-script text-xl leading-snug text-rose-deep">{w.message}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
