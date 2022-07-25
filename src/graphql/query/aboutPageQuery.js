import { gql } from 'graphql-request';

export const AboutPageQuery = gql`
  query AboutUs {
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
    aboutUs {
      title
      description
      image {
        name
        url
      }
      subtitle
      Section {
        title
        subtitle
        Principles {
          id
          title
          description
          Icon {
            name
            url
          }
        }
      }
    }
  }
`;
