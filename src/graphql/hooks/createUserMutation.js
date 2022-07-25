import { gql } from 'graphql-request';

export const CreateUserQueryMutation = gql`
  mutation CreateUserMutation(
    $email: String!
    $fullName: String!
    $subject: String!
    $message: String!
  ) {
    createUserQuery(
      input: {
        data: {
          email: $email
          fullName: $fullName
          subject: $subject
          message: $message
        }
      }
    ) {
      userQuery {
        fullName
        email
        subject
        message
      }
    }
  }
`;
