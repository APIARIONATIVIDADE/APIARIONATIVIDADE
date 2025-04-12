import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Apiário Natividade',
  description: 'Sistema de vendas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-yellow-50 text-gray-800">
        <nav className="bg-yellow-100 p-4 flex gap-4 shadow">
          <Link href="/">Início</Link>
          <Link href="/vendas">Vendas</Link>
          <Link href="/compras">Compras</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/historico">Histórico</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
