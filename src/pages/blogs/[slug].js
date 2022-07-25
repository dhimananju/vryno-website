import React from 'react';
import Head from 'next/head';
import { request } from 'graphql-request';
import {
  GetBlogPostBySlugQuery,
  GetBlogPostSlugs,
} from '../../graphql/query/getBlogPostBySlugQuery';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function getStaticPaths() {
  const paths = await request(
    process.env.NEXT_PUBLIC_GRAPH_API,
    GetBlogPostSlugs
  );
  const pathFormat = [];
  paths.blogs.forEach((path) =>
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
    GetBlogPostBySlugQuery,
    {
      slug: context.params.slug,
    }
  );
  return {
    props: posts,
    revalidate: 60,
  };
};

function Blog(props) {
  const { homePage, blogs } = props;
  const blog = blogs[0];
  return (
    <div>
      <Head>
        <meta name='description' content='Vryno' />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>Vryno - {blog.title}</title>
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
      <main className='container'>
        <BlogPost content={blog} />
      </main>
      <Footer content={homePage.Footer} />
    </div>
  );
}

const BlogPost = ({ content }) => {
  return (
    <article className='postbox post format-image mb-50'>
      <div className='postbox__thumb mb-30'>
        <a href='#'>
          <img src={content.thumbnail.url} alt={content.thumbnail.name} />
        </a>
      </div>
      <div className='postbox__text'>
        <div className='post-meta mb-15'>
          <span>
            <i className='far fa-calendar-check' /> {content.created_at}
          </span>
          <span>
            <a href='#'>
              <i className='far fa-user' /> {content.author.name}
            </a>
          </span>
        </div>
        <h3 className='blog-title'>
          <a href='#'>{content.title}</a>
        </h3>
        <div className='post-text mb-20'>
          <ReactMarkDown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {content.description}
          </ReactMarkDown>
        </div>
      </div>
    </article>
  );
};

export default Blog;
