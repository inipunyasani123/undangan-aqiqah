'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';
import Page from './ui/Page';

// Halaman 5: galeri foto si kecil (lightbox).
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <Page chapter="Album Kenangan" pageNo="Halaman 5">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Galeri Si Kecil</h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {gallery.map((foto, i) => (
          <button
            key={foto.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative h-32 w-full overflow-hidden rounded-2xl border-4 border-blush shadow-sm sm:h-36"
            aria-label={`Perbesar foto: ${foto.alt}`}
          >
            <Image src={foto.src} alt={foto.alt} fill sizes="(max-width:640px) 45vw, 160px" className="object-cover transition group-hover:scale-110" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Foto ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button ref={tombolTutup} type="button" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-cream hover:bg-cream/10" onClick={() => setActive(null)} aria-label="Tutup foto">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-lg overflow-hidden rounded-3xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="(max-width: 640px) 100vw, 512px" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Page>
  );
}
