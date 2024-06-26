import Navigation from './components/Navigation';
import './styles/global.css';

export const metadata = {
  title: 'Experiment Node',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
          <link rel="icon" href="/favicon.png" />
      </head>
      <body>
      <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
