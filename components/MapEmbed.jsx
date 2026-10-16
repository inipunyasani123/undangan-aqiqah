import { MapPin } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 6: lokasi acara.
export default function MapEmbed() {
  const { location } = config;
  return (
    <Page chapter="Peta Menuju" pageNo="Halaman 6" className="text-center">
      <h2 className="font-display text-3xl font-bold text-ink">Lokasi Acara</h2>
      <div className="relative mt-6 overflow-hidden rounded-2xl border-4 border-blush bg-blush/40 shadow-sm">
        <p className="absolute inset-0 flex items-center justify-center gap-2 text-sm font-semibold text-muted" aria-hidden="true">
          <MapPin size={16} /> Memuat peta…
        </p>
        <iframe
          src={location.mapEmbed}
          title="Peta lokasi acara"
          className="relative h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">{location.label}</p>
      {location.note && <p className="mt-1 text-xs text-muted">{location.note}</p>}
      <a
        href={location.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose-deep px-6 py-3 text-sm font-bold text-cream transition hover:bg-ink"
      >
        <MapPin size={16} aria-hidden="true" /> Buka di Google Maps
      </a>
    </Page>
  );
}
