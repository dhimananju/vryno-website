import { gql } from 'graphql-request';

export const CrmPageQuery = gql`
  query crmPageQuery {
    crm {
      crmHero {
        subtitle
        title
        description
        CTA
        image {
          url
          name
        }
      }
      featureTitle
      features {
        title
        description
        image {
          url
          name
        }
      }
      CrmCTA {
        title
        subtitle
        GuideDescription
        image {
          url
          name
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
        AlternateCTA1Link
        AlternateCTA2Link
        AlternateCTA2
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
