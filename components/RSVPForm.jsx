'use client';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 7: konfirmasi kehadiran. Ini undangan contoh: data tidak dikirim ke mana pun.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan undangan aqiqah digital seperti contoh Aisyah.');

export default function RSVPForm({ onSubmit }) {
  const { baby } = config;
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);
  const pesanSukses = useRef(null);

  // Form hilang setelah dikirim; pindahkan fokus ke pesan sukses supaya tidak jatuh ke <body>.
  useEffect(() => {
    if (done) pesanSukses.current?.focus();
  }, [done]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'w-full rounded-xl border-2 border-rose/40 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose-deep';
  const lab = 'mb-1 block text-xs font-bold uppercase tracking-wide text-muted';

  return (
    <Page chapter="Konfirmasi" pageNo="Halaman 7" className="text-center">
      <h2 className="font-display text-3xl font-bold text-ink">Akan Hadir?</h2>

      {done ? (
        <div className="mt-6 rounded-2xl bg-blush/50 p-7" role="status">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-deep text-cream">
            <Check size={26} />
          </div>
          <p ref={pesanSukses} tabIndex={-1} className="mt-4 font-display text-2xl font-bold text-ink">Terima kasih, {form.name.trim()}!</p>
          <p className="mt-1 text-sm text-muted">Sampai jumpa di acara aqiqah {baby.name}.</p>
          <p className="mt-4 text-xs text-muted">
            Ini undangan contoh, jadi konfirmasi tidak dikirim ke mana pun.{' '}
            <a href={PESAN_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-deep underline underline-offset-2 hover:text-ink">
              Pesan undangan seperti ini
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-4 text-left">
          <div>
            <label htmlFor="rsvp-nama" className={lab}>Nama</label>
            <input id="rsvp-nama" name="name" value={form.name} onChange={handle} placeholder="Nama Anda" autoComplete="name" maxLength={60} className={field} required />
          </div>
          <div>
            <label htmlFor="rsvp-hadir" className={lab}>Kehadiran</label>
            <select id="rsvp-hadir" name="attendance" value={form.attendance} onChange={handle} className={field}>
              <option value="hadir">Insya Allah Hadir</option>
              <option value="tidak">Belum Bisa Hadir</option>
              <option value="ragu">Masih Ragu</option>
            </select>
          </div>
          {form.attendance === 'hadir' && (
            <div>
              <label htmlFor="rsvp-jumlah" className={lab}>Jumlah tamu</label>
              <input id="rsvp-jumlah" type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
            </div>
          )}
          <button type="submit" className="w-full rounded-full bg-rose-deep py-3 text-sm font-bold text-cream transition hover:bg-ink">
            Kirim Konfirmasi
          </button>
        </form>
      )}
    </Page>
  );
}
