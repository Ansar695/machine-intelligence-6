import { Helmet } from 'react-helmet-async';










export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "/api/placeholder/1200/630"
}) {
  const fullTitle = `${title} | SoftwareCraft`;
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>);

}