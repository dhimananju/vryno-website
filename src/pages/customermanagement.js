import React from 'react';
import { CrmPageQuery } from '../graphql/query/crmPageQuery';
import { request } from 'graphql-request';
import { NavBar } from '../components/NavBar';
import { CrmHero } from '../components/crm/CrmHero';
import { CrmFeatures } from '../components/crm/CrmFeatures';
import { CrmCta } from '../components/crm/CrmCta';
import Head from 'next/head';
import { Footer } from '../components/Footer';

export const getStaticProps = async () => {
  const data = await request(process.env.NEXT_PUBLIC_GRAPH_API, CrmPageQuery);

  return { props: data, revalidate: 60 };
};

function crm(props) {
  const { homePage, crm } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - CRM</title>
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
        <div className='xn-about-area pt-60 pb-100 fix'>
          <CrmHero content={crm.crmHero} />
        </div>
        <div>
          <CrmFeatures title={crm.featureTitle} features={crm.features} />
        </div>
        <div>
          <CrmCta content={crm.CrmCTA} />
        </div>
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default crm;
