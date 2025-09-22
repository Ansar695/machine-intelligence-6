import AboutSection from '../AboutSection'
import { ThemeProvider } from '../ThemeProvider'

export default function AboutSectionExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <AboutSection />
      </div>
    </ThemeProvider>
  )
}