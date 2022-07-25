import { gql } from 'graphql-request';

export const LmsPageQuery = gql`
  query LmsPageQuery {
    lm {
      Hero {
        title
        subtitle
        description
        image {
          name
          url
        }
      }
      LMSFeature {
        title
        subtitle
        Features {
          title
          id
          description
          image {
            name
            url
          }
        }
      }
      LMSWorking {
        title
        subtitle
        Steps {
          title
          id
          description
          image {
            url
            name
          }
        }
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
