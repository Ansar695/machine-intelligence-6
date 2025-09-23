import PortfolioSection from '../PortfolioSection';
import { ThemeProvider } from '../ThemeProvider';

export default function PortfolioSectionExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <PortfolioSection />
      </div>
    </ThemeProvider>);

}