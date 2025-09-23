import { ThemeProvider, useTheme } from '../ThemeProvider';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      data-testid="button-theme-toggle">
      
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>);

}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-8 bg-background text-foreground">
        <div className="flex items-center gap-4">
          <p>Current theme toggle:</p>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>);

}