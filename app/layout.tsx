import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Cole Jorgensen | GIS, Applications & Storytelling',
 description: 'Explore Cole Jorgensen’s work: JobFinder, Church Atlas, and ArcGIS StoryMaps on Knoxville housing growth and the Everglade snail kite.',
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}

