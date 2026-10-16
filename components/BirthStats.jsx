import { Calendar, Clock, Scale, Ruler } from 'lucide-react';
import config from '@/lib/data';
import Page from './ui/Page';

// Halaman 2: data kelahiran si kecil.
export default function BirthStats() {
  const { baby } = config;
  const items = [
    { icon: Calendar, label: 'Tanggal Lahir', value: baby.birthDate },
    { icon: Clock, label: 'Waktu', value: baby.birthTime },
    { icon: Scale, label: 'Berat', value: baby.weight },
    { icon: Ruler, label: 'Panjang', value: baby.length },
  ];
  return (
    <Page chapter="Bab Kedua" pageNo="Halaman 2">
      <h2 className="text-center font-display text-3xl font-bold text-ink">Data Si Kecil</h2>
      <dl className="mt-7 grid grid-cols-3 gap-3">
        {items.map(({ icon: Icon, label, value }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center rounded-2xl bg-blush/50 px-2 py-4 text-center ${i === 0 ? 'col-span-3 sm:py-5' : ''}`}
          >
            <dt className="flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
              <Icon size={i === 0 ? 26 : 22} className="text-rose-deep" />
              {label}
            </dt>
            <dd className={`mt-0.5 whitespace-nowrap font-display font-bold text-ink ${i === 0 ? 'text-xl' : 'text-base sm:text-lg'}`}>{value}</dd>
          </div>
        ))}
      </dl>
    </Page>
  );
}
