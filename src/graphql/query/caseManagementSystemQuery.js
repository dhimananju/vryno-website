import { gql } from 'graphql-request';

export const CaseManagementSystemQuery = gql`
  query CaseManagementSystemQuery {
    caseManagement {
        caseManagementHero {
        title
        subtitle
        description
        image {
          name
          url
        }
      }
      caseManagementFeatures {
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
      caseManagementWorking {
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
