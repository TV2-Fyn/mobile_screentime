import './globals.css'

export const metadata = {
  title: 'Skærmtid',
  description: 'Sammenlign din skærmtid med gennemsnitsdanskeren.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center main">
          {children}
        </main>
      </body>
    </html>
  )
}
