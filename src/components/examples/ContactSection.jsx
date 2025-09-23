import ContactSection from '../ContactSection';
import { ThemeProvider } from '../ThemeProvider';

export default function ContactSectionExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <ContactSection />
      </div>
    </ThemeProvider>);

}