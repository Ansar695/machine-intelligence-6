import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}