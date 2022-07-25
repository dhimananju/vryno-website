import React from 'react';
import { request } from 'graphql-request';
import { ContactUsPageQuery } from '../graphql/query/contactUsPageQuery';
import Head from 'next/head';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { ContactUsMain } from '../components/contactus/ContactUsMain';
import { ContactUsHeader } from '../components/contactus/ContactUsHeader';

export const getStaticProps = async () => {
  const data = await request(
    process.env.NEXT_PUBLIC_GRAPH_API,
    ContactUsPageQuery
  );

  return { props: data, revalidate: 60 };
};

function contactus(props) {
  const { homePage, contactus } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - Contact Us</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='site.webmanifest' />
        <link rel='shortcut icon' type='image/x-icon' href='/img/favicon.png' />
      </Head>
      <NavBar
        navlinks={homePage.navlinks}
        nav={homePage.Nav}
        logo={homePage.Footer.logo.url}
        alterNateCta1={homePage.Hero.AlternateCTA1}
        alterNateCta2={homePage.Hero.AlternateCTA2}
        alterNateCta1Link={homePage.Hero.AlternateCTA1Link}
        alterNateCta2Link={homePage.Hero.AlternateCTA2Link}
      />
      <main>
        <div>
          <div
            className='page-title-area pos-relative gray-bg pt-50 pb-60 fix'
            style={{ backgroundImage: 'url(img/bg/page-title-bg.jpg)' }}
          >
            <div className='shape-slider'>
              <img
                className='shape shape-2  '
                src='img/shape/shape2.png'
                alt='icon'
              />
              <img
                className='shape shape-4 '
                src='img/shape/shape3.png'
                alt='icon'
              />
              <img
                className='shape shape-5 '
                src='img/shape/shape-sq.png'
                alt='icon'
              />
              <img
                className='shape shape-6 '
                src='img/shape/shape-c-2.png'
                alt='icon'
              />
            </div>
            <ContactUsHeader />
          </div>
          <div className='contact-form-area pt-50 '>
            <ContactUsMain content={contactus} />
          </div>
          {/* <div className='contact-map'>
            <div id='contact-map' />
          </div> */}
        </div>
        ;
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default contactus;
