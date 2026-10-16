'use client';
import Link from 'next/link';
import { Share2 } from 'lucide-react';
import config from '@/lib/data';
import { invitationUrl, whatsappShareUrl } from '@/lib/utils';

// Halaman penutup buku: "Tamat".
export default function Footer() {
  const { footer, baby } = config;

  const share = () => {
    const text = `Aqiqah ${baby.fullName}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: invitationUrl() }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative z-10 px-5 py-10">
      <div className="story-page story-edge mx-auto max-w-xl px-7 py-12 text-center">
        <p className="font-script text-3xl text-rose-deep">Tamat</p>
        <div className="mx-auto my-5 h-px w-16 bg-rose/40" />
        <p className="text-sm leading-relaxed text-ink">{footer.closing}</p>
        <h2 className="mt-6 font-display text-4xl font-bold text-ink">{baby.name}</h2>
        <p className="mt-1 text-sm font-semibold text-[#a25311]">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-rose-deep px-6 py-3 text-sm font-bold text-rose-deep transition hover:bg-rose-deep hover:text-cream"
        >
          <Share2 size={15} aria-hidden="true" /> Bagikan Kabar Bahagia
        </button>

        {config.music.enabled && (
          <p className="mt-8 text-xs text-muted">
            Musik: {config.music.title} · {config.music.credit}
          </p>
        )}
        <p className="mt-2 text-xs text-muted">
          <Link href="/kirim" className="inline-block py-2 font-semibold text-rose-deep underline underline-offset-4">Kirim undangan ke kerabat</Link>
        </p>
      </div>
    </footer>
  );
}
