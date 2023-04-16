import './globals.css'

export const metadata = {
  title: 'Guia TypeScript',
  description: 'Esto es una guia para coger referencias de TypeScript por si algun dia lo necesito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
