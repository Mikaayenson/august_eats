import Head from "next/head";
import logo_and_icon from '../public/logo_and_icons.png'

const metaTitle = "Augusteats"
const metaDescription = "Your Food Nutrition and Allergy Ally"

const Seo = () => {

  return (
    <Head>
      {
        <>
          <title>{metaTitle}</title>
          <meta property="og:title" content={metaTitle} />
          <meta name="twitter:title" content={metaTitle} />
        </>
      }
      {
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
        </>
      }
      {
        <>
          <meta property="og:image" content={logo_and_icon} />
          <meta name="twitter:image" content={logo_and_icon} />
          <meta name="image" content={logo_and_icon} />
        </>
      }
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;