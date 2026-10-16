'use client';
import { useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';

import Decorations from './Decorations';
import Announcement from './Announcement';
import BirthStats from './BirthStats';
import NameMeaning from './NameMeaning';
import EventPage from './EventPage';
import Gallery from './Gallery';
import MapEmbed from './MapEmbed';
import RSVPForm from './RSVPForm';
import WishesForm from './WishesForm';
import Footer from './Footer';

// Isi buku cerita setelah sampul dibuka. Dimuat terpisah (next/dynamic) supaya JavaScript halaman pertama
// hanya berisi sampul; framer-motion dan seluruh bagian isi ikut di potongan ini.
export default function Isi() {
  const ref = useRef(null);

  // Tombol pembuka sudah hilang; fokus pindah ke awal isi.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Decorations />
      <div ref={ref} tabIndex={-1} className="relative z-10 outline-none">
        <Announcement />
        <BirthStats />
        <NameMeaning />
        <EventPage />
        <Gallery />
        <MapEmbed />
        <RSVPForm />
        <WishesForm />
        <Footer />
      </div>
    </MotionConfig>
  );
}
