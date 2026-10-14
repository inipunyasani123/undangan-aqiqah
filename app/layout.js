import './globals.css';
import { Quicksand, Caveat, Nunito } from 'next/font/google';
import config from '@/lib/data';

const display = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});
const script = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-caveat',
  display: 'swap',
});
const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Undangan Aqiqah Digital — Aisyah Khairunnisa","description":"Contoh undangan aqiqah digital bergaya buku cerita: data kelahiran, arti nama, galeri, RSVP, doa, dan musik latar.","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://undangan-aqiqah.pintuweb.id"),
  title: "Undangan Aqiqah Digital — Aisyah Khairunnisa",
  description: "Undangan aqiqah digital bertema buku cerita yang hangat. Sambut kelahiran si buah hati dan undang keluarga dalam satu tautan indah.",
  applicationName: "Undangan Digital",
  keywords: ["undangan aqiqah", "undangan aqiqah digital", "undangan kelahiran", "undangan syukuran bayi"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-aqiqah.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-aqiqah.pintuweb.id",
    siteName: "Undangan Digital",
    title: "Undangan Aqiqah Digital — Aisyah Khairunnisa",
    description: "Undangan aqiqah digital bertema buku cerita yang hangat. Sambut kelahiran si buah hati dan undang keluarga dalam satu tautan indah.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Aqiqah Digital — Aisyah Khairunnisa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Aqiqah Digital — Aisyah Khairunnisa",
    description: "Undangan aqiqah digital bertema buku cerita yang hangat. Sambut kelahiran si buah hati dan undang keluarga dalam satu tautan indah.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#6b9dc4',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
