import React from 'react';
import Head from 'next/head';
import { request } from 'graphql-request';
import { BlogHeader } from '../components/blog/BlogHeader';
import { Categories } from '../components/blog/Categories';
import { RecentPosts } from '../components/blog/RecentPosts';
import { Socials } from '../components/blog/Socials';
import { BlogPageQuery } from '../graphql/query/blogPageQuery';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { PaginatedItems } from '../components/Pagination';

export const getStaticProps = async () => {
  const data = await request(process.env.NEXT_PUBLIC_GRAPH_API, BlogPageQuery, {
    categoryId: 1,
  });

  return { props: data, revalidate: 60 };
};

function blog(props) {
  const { homePage, category, RecentBlogs, CategoryTitleWithBlogCount, blogs } =
    props;
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - Blogs</title>
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
        <BlogHeader bgImage={blogs[0].thumbnail.url} />
        <section className='blog-area pt-60 pb-50'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                {/* // Show the paginated Items here */}
                <PaginatedItems items={blogs} itemsPerPage={5} />
                {/* <Pagination /> */}
              </div>
              <div className='col-lg-4'>
                {/* <BlogSearch /> */}
                <RecentPosts content={RecentBlogs} />
                <Categories content={CategoryTitleWithBlogCount} />
                <Socials content={homePage.Footer} />
              </div>
            </div>
          </div>
          <PaginatedItems itemsPerPage={5} />
        </section>
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

export default blog;
