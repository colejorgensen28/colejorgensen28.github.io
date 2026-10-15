import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title: 'Cole Jorgensen | GIS, Applications & Storytelling',
 description: 'Explore Cole Jorgensen’s GIS projects: Knoxville housing suitability, the Everglade snail kite StoryMap, Church Atlas, and JobFinder. Open visual covers for stories, evidence, and demos.',
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}

