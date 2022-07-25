import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import { AboutPageQuery } from '../graphql/query/aboutPageQuery';
import { request } from 'graphql-request';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { AboutSection } from '../components/about/AboutSection';

export const getStaticProps = async () => {
  const data = await request(process.env.NEXT_PUBLIC_GRAPH_API, AboutPageQuery);

  return { props: data, revalidate: 60 };
};

function about(props) {
  const { aboutUs, homePage } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>About</title>
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
          <AboutTitle />
        </div>
        <div className='features-3-area features-3-area-top pt-20 pb-40 fix'>
          <AboutSection content={aboutUs} />
        </div>
        {/* services section */}
        <div>
          <Section content={aboutUs.Section} />
        </div>
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default about;

function AboutTitle() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <div className='page-title mb-30'>
            <h3>About Us</h3>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='breadcrumb-list text-left text-lg-right mb-30'>
            <ul>
              <li>
                <NextLink href='/' passHref>
                  <a>Home</a>
                </NextLink>
              </li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ content }) {
  return (
    <div className='excellent-feature-area pt-150 fix'>
      <div className='container' id='corevalues'>
        <div className='row'>
          <div className='col-xl-8 offset-xl-2'>
            <div className='section-title-2 text-center mb-70'>
              <span className='st-sub'>{content.subtitle}</span>
              <h2 className='mb-20 f-600'>{content.title}</h2>
              <img src='img/shape/line.png' alt='line' />
            </div>
          </div>
        </div>
        <div className='row'>
          {content.Principles.map((principle) => (
            <div className='col-lg-3 col-md-6' key={principle.title}>
              <div
                className='ex-fea-list mb-60'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div className='ex-fea-img mb-30'>
                  <img src={principle.Icon.url} alt={principle.Icon.name} />
                </div>
                <h3 style={{ textAlign: 'center' }}>{principle.title}</h3>
                <p style={{ textAlign: 'center' }}>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
