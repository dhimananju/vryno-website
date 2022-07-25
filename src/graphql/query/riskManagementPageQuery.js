import { gql } from 'graphql-request';

export const RiskManagementPageQuery = gql`
  query RiskManagementPageQuery {
    riskManagement {
      Hero {
        title
        description
        primaryCTA
        secondaryCTA
        videoLink
        demoLink
        image {
          url
          name
        }
      }
      InsideVryno {
        title
        subtitle
        description
        Items {
          id
          title
          description
          image {
            url
            name
          }
        }
      }
      RmFeatures {
        title
        subtitle
        Features {
          id
          title
          description
          layoutRm
          image {
            url
            name
          }
          iconRm {
            name
            url
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
