import { gql } from 'graphql-request';

export const CategoryBlogPageQuery = gql`
  query CategoryBlogPageQuery($slug: String!) {
    categories(where: { slug: $slug }) {
      slug
      title
      blogs(sort: "created_at:desc") {
        id
        created_at
        title
        description
        thumbnail {
          url
          name
        }
        author {
          name
        }
      }
    }
    RecentBlogs: blogs(limit: 3, sort: "created_at:desc") {
      id
      title
      created_at
      thumbnail {
        name
        url
      }
    }
    CategoryTitleWithBlogCount: categories {
      slug
      title
      count: blogs(limit: 1, sort: "created_at:desc") {
        id
      }
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

export const CategorySlugsQuery = gql`
  query CategorySlugsQuery {
    categories {
      slug
    }
  }
`;
