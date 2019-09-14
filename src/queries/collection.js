import gql from 'graphql-tag';

export const getCollections = gql`
  {
    allCollections {
      title
      description
      id
    }
  }
`;
