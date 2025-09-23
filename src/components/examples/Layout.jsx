import Layout from '../Layout';
import { ThemeProvider } from '../ThemeProvider';

export default function LayoutExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Layout>
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Layout Example</h1>
              <p className="text-muted-foreground">
                This shows the Layout component with Header and Footer wrapped around content.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>);

}