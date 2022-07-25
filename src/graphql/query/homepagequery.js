import { gql } from 'graphql-request';

export const HomePageQuery = gql`
  query HomePage {
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
        title
        subtitle
        description
        primaryCTA
        PrimaryCTALink
        secondaryCTA
        AlternateCTA1
        AlternateCTA2
        AlternateCTA1Link
        AlternateCTA2Link
        videoLink
        image {
          url
          name
        }
      }
      About {
        title
        description
        image {
          url
          name
        }
      }
      Products {
        title
        subtitle
        features {
          title
          linkHm
          description
          image {
            url
            name
          }
        }
      }
      ExplicitFeatures {
        title
        description
        image {
          url
          name
        }
      }
      # Team {
      #   title
      #   members {
      #     name
      #     id
      #     position
      #     avatar {
      #       name
      #       url
      #     }
      #     linkedin
      #   }
      # }
      Clients {
        title
        CTA
        subtitle
        partnersTitle
        Client {
          name
          id
          logo {
            name
            url
          }
        }
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
