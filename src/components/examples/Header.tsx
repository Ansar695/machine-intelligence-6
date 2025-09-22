import Header from '../Header'
import { ThemeProvider } from '../ThemeProvider'

export default function HeaderExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 px-4">
          <div className="container mx-auto space-y-8">
            <div id="home" className="h-96 bg-card rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Home Section</p>
            </div>
            <div id="services" className="h-96 bg-card rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Services Section</p>
            </div>
            <div id="about" className="h-96 bg-card rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">About Section</p>
            </div>
            <div id="portfolio" className="h-96 bg-card rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Portfolio Section</p>
            </div>
            <div id="contact" className="h-96 bg-card rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Contact Section</p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}