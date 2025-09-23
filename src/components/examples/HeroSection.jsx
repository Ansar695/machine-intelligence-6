import HeroSection from '../HeroSection';
import { ThemeProvider } from '../ThemeProvider';

export default function HeroSectionExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="bg-background">
        <HeroSection />
      </div>
    </ThemeProvider>);

}