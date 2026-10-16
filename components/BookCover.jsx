'use client';
import Image from 'next/image';
import { BookOpen, Moon, Star } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import { tanggalWIB } from '@/lib/utils';
import SakelarMusik from './SakelarMusik';

// Sampul buku cerita "Dreamy Storybook": bulan, awan, bintang. Latar sampul buram penuh
// (bg-cream di bawah gradien) supaya isi halaman di belakangnya tidak ikut terlihat.
export default function BookCover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { baby, opening, event } = config;
  const tanggal = tanggalWIB(event.start, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream bg-gradient-to-b from-rose/40 via-blush/50 to-cream ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      {/* Bintang berkelip */}
      <Star size={22} aria-hidden="true" className="absolute left-8 top-12 animate-twinkle fill-gold text-gold opacity-70" />
      <Star size={16} aria-hidden="true" className="absolute right-10 top-1/4 animate-twinkle fill-rose-deep text-rose-deep opacity-60 [animation-delay:1s]" />
      <Star size={28} aria-hidden="true" className="absolute bottom-24 right-8 animate-twinkle fill-gold text-gold opacity-50 [animation-delay:2s]" />

      <div className="flex min-h-full items-center justify-center px-5 py-10">
        <div className="masuk-skala story-page relative w-full max-w-sm overflow-hidden px-7 pb-6 pt-8 text-center">
          {/* Ornamen bulan + awan */}
          <div className="relative mb-4 flex justify-center animate-floaty" aria-hidden="true">
            <div className="absolute -top-6 h-24 w-24 rounded-full bg-rose-deep/20 blur-2xl" />
            <Moon size={60} className="relative z-10 fill-rose-deep/90 text-rose-deep drop-shadow" />
            <span className="absolute -left-3 top-8 h-5 w-12 rounded-full bg-cream/90 blur-[2px]" />
            <span className="absolute -right-1 top-3 h-6 w-14 rounded-full bg-cream/90 blur-[2px]" />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-deep">Undangan Aqiqah</p>
          <h1
            className="mt-3 font-display text-4xl font-bold leading-tight text-rose-deep"
            style={{ textShadow: '0 0 16px rgba(255,255,255,0.85)' }}
          >
            {opening.cover}
          </h1>
          <div className="mx-auto mb-2 mt-4 h-1 w-16 rounded-full bg-rose/50" aria-hidden="true" />
          <p className="text-sm italic text-muted">Kisah kecil yang baru saja dimulai…</p>

          {/* Foto bayi */}
          <div className="relative mx-auto my-5 h-36 w-36 overflow-hidden rounded-full border-[6px] border-cream shadow-lg">
            <Image src={baby.photo} alt={baby.fullName} fill priority sizes="144px" className="object-cover" />
          </div>
          <p className="font-display text-2xl font-bold text-ink">{baby.name}</p>
          <p className="masuk mt-1 text-xs font-semibold text-muted" style={{ '--tunda': '0.2s' }}>
            {event.name} · {tanggal}
          </p>

          <div className="masuk mt-5 rounded-2xl bg-blush/50 px-4 py-3" style={{ '--tunda': '0.3s' }}>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Untuk Sahabat</p>
            <p className="break-words text-base font-bold text-ink">{guest}</p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            disabled={keluar}
            className="mt-6 inline-flex min-h-12 w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-rose-deep px-7 text-sm font-bold text-cream shadow-lg shadow-rose-deep/20 transition hover:bg-ink active:scale-95"
          >
            <BookOpen size={16} aria-hidden="true" /> Buka Buku Cerita
          </button>
          <div className="mt-2 flex justify-center">
            <SakelarMusik nyala={musik} onUbah={onMusik} className="rounded-full px-3 text-xs font-bold text-rose-deep hover:bg-blush/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
