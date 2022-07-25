import React from 'react';
import { request } from 'graphql-request';
import { NavBar } from '../components/NavBar';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { LmsHero } from '../components/lms/LmsHero';
import { LmsFeature } from '../components/lms/LmsFeature';
import LmsWorking from '../components/lms/LmsWorking';
import { CaseManagementSystemQuery } from '../graphql/query/caseManagementSystemQuery';

export const getStaticProps = async () => {
  const data = await request(process.env.NEXT_PUBLIC_GRAPH_API, CaseManagementSystemQuery);

  return { props: data, revalidate: 60 };
};

function lms(props) {
  const { homePage, caseManagement } = props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - Case Management System</title>
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
        <LmsHero content={caseManagement.caseManagementHero} />
        <LmsFeature content={caseManagement.caseManagementFeatures} />
        <LmsWorking content={caseManagement.caseManagementWorking} />
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default lms;
