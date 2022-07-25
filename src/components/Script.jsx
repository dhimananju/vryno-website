import NextScript from 'next/script';

export function Scripts() {
  return (
    <>
      <link
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
        crossorigin='anonymous'
      ></link>
      <NextScript
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        strategy='beforeInteractive'
      />

      <NextScript
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-GVNSSENPB1`}
      />
      <NextScript
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GVNSSENPB1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Rubik:300,400,500,700&display=swap'
      />

      <NextScript
        strategy='beforeInteractive'
        src='/js/vendor/modernizr-3.5.0.min.js'
      />
      <NextScript
        strategy='beforeInteractive'
        src='/js/vendor/jquery-1.12.4.min.js'
      />
      <NextScript strategy='beforeInteractive' src='/js/popper.min.js' />
      <NextScript strategy='beforeInteractive' src='/js/bootstrap.min.js' />
      <NextScript strategy='beforeInteractive' src='/js/owl.carousel.min.js' />
      <NextScript strategy='beforeInteractive' src='/js/isotope.pkgd.min.js' />
      <NextScript strategy='beforeInteractive' src='/js/one-page-nav-min.js' />
      <NextScript strategy='beforeInteractive' src='/js/slick.min.js' />
      <NextScript
        strategy='beforeInteractive'
        src='/js/jquery.meanmenu.min.js'
      />
      <NextScript strategy='beforeInteractive' src='/js/ajax-form.js' />
      <NextScript strategy='beforeInteractive' src='/js/wow.min.js' />
      <NextScript strategy='beforeInteractive' src='/js/aos.js' />
      <NextScript
        strategy='beforeInteractive'
        src='/js/jquery.scrollUp.min.js'
      />
      <NextScript
        strategy='beforeInteractive'
        src='/js/imagesloaded.pkgd.min.js'
      />
      <NextScript
        strategy='beforeInteractive'
        src='/js/jquery.magnific-popup.min.js'
      />
      <NextScript strategy='beforeInteractive' src='/js/plugins.js' />
      <NextScript strategy='beforeInteractive' src='/js/main.js' />
    </>
  );
}
