import React from 'react';
import Head from 'next/head';
import { request } from 'graphql-request';
import { BlogHeader } from '../../../components/blog/BlogHeader';
import { PaginatedItems } from '../../../components/Pagination';
import { Categories } from '../../../components/blog/Categories';
import { RecentPosts } from '../../../components/blog/RecentPosts';
import { Socials } from '../../../components/blog/Socials';
import { NavBar } from '../../../components/NavBar';
import { Footer } from '../../../components/Footer';
import {
  CategoryBlogPageQuery,
  CategorySlugsQuery,
} from '../../../graphql/query/categoryBlogPageQuery';

export async function getStaticPaths() {
  const paths = await request(
    process.env.NEXT_PUBLIC_GRAPH_API,
    CategorySlugsQuery
  );
  const pathFormat = [];
  paths.categories.forEach((path) =>
    pathFormat.push({ params: { slug: path.slug } })
  );
  return {
    paths: pathFormat,
    fallback: 'blocking',
  };
}

export const getStaticProps = async (context) => {
  const posts = await request(
    process.env.NEXT_PUBLIC_GRAPH_API,
    CategoryBlogPageQuery,
    {
      slug: context.params.slug,
    }
  );
  return {
    props: posts,
    revalidate: 60,
  };
};

function blog(props) {
  const { homePage, categories, RecentBlogs, CategoryTitleWithBlogCount } =
    props;
  const category = categories[0];
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - {category.title}</title>
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
        <BlogHeader bgImage={category.blogs[0].thumbnail.url} />
        <section className='blog-area pt-50 pb-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                {/* {category.blogs.map((blog) => (
                  <BlogShowCase content={blog} />
                ))} */}
                <PaginatedItems items={category.blogs} itemsPerPage={5} />
              </div>
              <div className='col-lg-4'>
                {/* <BlogSearch /> */}
                <RecentPosts content={RecentBlogs} />
                <Categories content={CategoryTitleWithBlogCount} />
                <Socials content={homePage.Footer} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer content={homePage.Footer} />
    </div>
  );
}

export default blog;
