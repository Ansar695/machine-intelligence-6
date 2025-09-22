import Footer from '../Footer'
import { ThemeProvider } from '../ThemeProvider'

export default function FooterExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Footer />
      </div>
    </ThemeProvider>
  )
}