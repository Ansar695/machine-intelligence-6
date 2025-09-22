import ServicesSection from '../ServicesSection'
import { ThemeProvider } from '../ThemeProvider'

export default function ServicesSectionExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <ServicesSection />
      </div>
    </ThemeProvider>
  )
}