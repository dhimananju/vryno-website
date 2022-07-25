import Head from 'next/head';
import { HomePageQuery } from '../graphql/query/homepagequery';
import { request } from 'graphql-request';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { ExplicitFeatures } from '../components/ExplicitFeatures';
import { Team } from '../components/Team';
import { Clients } from '../components/Clients';
import { Footer } from '../components/Footer';

export const getStaticProps = async () => {
  const data = await request(process.env.NEXT_PUBLIC_GRAPH_API, HomePageQuery);

  return { props: data, revalidate: 60 };
};

export default function Home(props) {
  const { homePage } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno | A Next Generation Solution </title>
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
        {/* slider-area  */}
        <section className='slider-area fix'>
          <div className='shape-slider'>
            <span className='shape shape-circle shape-c3-1 ' />
            <span className='shape shape-circle shape-c3-2 ' />
            <span className='shape shape-circle shape-c3-3 ' />
          </div>
          <div className='single-slider slider-height-1 d-flex align-items-center'>
            <Hero content={homePage.Hero} />
          </div>
        </section>
        <div className='features-3-area features-3-area-top mt-50 pb-110 fix'>
          <About content={homePage.About} />
        </div>
        <section id='products' className='fea-list-area fix'>
          <Products content={homePage.Products} />
        </section>
        <div className='features-3-area pt-120 pb-110 fix'>
          <ExplicitFeatures content={homePage.ExplicitFeatures} />
        </div>
        {/* <div className='team-area pb-110' id='team'>
          <Team content={homePage.Team} />
        </div> */}
        {/* testimonial-6-area */}

        <section
          className='brand-3-area pb-150'
          style={{
            backgroundImage: 'url(img/bg/subs-bg.png)',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Clients content={homePage.Clients} />
        </section>
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}
