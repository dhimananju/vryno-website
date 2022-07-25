import { gql } from 'graphql-request';

export const GetBlogPostBySlugQuery = gql`
  query GetBlogPostBySlugQuery($slug: String!) {
    blogs(where: { slug: $slug }) {
      title
      created_at
      description
      thumbnail {
        url
        name
      }
      author {
        name
      }
      category {
        title
      }
      slug
    }
    homePage {
      navlinks
      Nav {
        link
        title
        Submenu {
          id
          title
          link
        }
      }
      Hero {
        AlternateCTA1
        AlternateCTA2
        AlternateCTA1Link
        AlternateCTA2Link
      }
      Footer {
        name
        description
        facebook
        youtube
        linkedin
        instagram
        logo {
          url
          name
        }
        FooterExtras {
          id
          title
          extra1
          extra2
          extra3
          extra1Link
          extra2Link
          extra3Link
        }
      }
    }
  }
`;

export const GetBlogPostSlugs = gql`
  query GetBlogPostSlugs {
    blogs {
      slug
    }
  }
`;
