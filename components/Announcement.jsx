'use client';
import Image from 'next/image';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 1: pengumuman kelahiran.
export default function Announcement() {
  const { baby, opening } = config;
  return (
    <Page chapter={opening.chapter} pageNo="Halaman 1" className="text-center">
      <p className="text-sm font-semibold text-muted">{opening.announce}</p>

      <div className="relative mx-auto mt-6 h-52 w-52 overflow-hidden rounded-[2rem] border-[6px] border-blush shadow-md">
        <Image src={baby.photo} alt={baby.fullName} fill sizes="208px" className="object-cover" />
      </div>

      <h1 className="mt-6 break-words font-display text-4xl font-bold leading-tight text-rose-deep sm:text-5xl">{baby.fullName}</h1>
      <p className="mt-3 font-script text-2xl text-[#ce6916]">si kecil penuh berkah</p>

      <p className="mt-5 text-sm leading-relaxed text-ink">
        {baby.gender} dari pasangan
        <br />
        <span className="font-bold">{baby.parents}</span>
      </p>
    </Page>
  );
}
