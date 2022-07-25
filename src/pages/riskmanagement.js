import React from 'react';
import { request } from 'graphql-request';
import { RiskManagementPageQuery } from '../graphql/query/riskManagementPageQuery';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import RmHero from '../components/riskmanagement/RmHero';
import { RmInside } from '../components/riskmanagement/RmInside';
import Head from 'next/head';
import { RmFeature } from '../components/riskmanagement/RmFeature';

export const getStaticProps = async () => {
  const data = await request(
    process.env.NEXT_PUBLIC_GRAPH_API,
    RiskManagementPageQuery
  );

  return { props: data, revalidate: 60 };
};

function riskmanagement(props) {
  const { homePage, riskManagement } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - Risk Management</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='site.webmanifest' />
        <link rel='shortcut icon' type='image/x-icon' href='img/favicon.png' />
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
        <RmHero content={riskManagement.Hero} />
        <RmInside content={riskManagement.InsideVryno} />
        <RmFeature content={riskManagement.RmFeatures} />
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default riskmanagement;
