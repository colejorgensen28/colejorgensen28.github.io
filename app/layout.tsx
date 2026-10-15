import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Cole Jorgensen | GIS, Applications & Storytelling',
 description: 'Cole Jorgensen’s GIS portfolio: Knoxville terrain and housing suitability analysis, Church Atlas, and JobFinder. Explore project stories, evidence, and web mapping prototypes.',
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}

