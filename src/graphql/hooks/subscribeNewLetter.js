import { gql } from 'graphql-request';

export const SubscribeNewsLetterMutation = gql`
  mutation SubscribeNewLetter($email: String!) {
    createNewletter(input: { data: { email: $email } }) {
      newletter {
        email
      }
    }
  }
`;
