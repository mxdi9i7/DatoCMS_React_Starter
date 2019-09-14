import gql from 'graphql-tag';

export const getItemsOfCollection = gql`
  query($collection: ItemId) {
    allItems(filter: { collection: { eq: $collection } }) {
      title
      description
      id
      collection {
        title
        description
        id
      }
    }
  }
`;

export const getItem = gql`
  query($id: ItemId) {
    item(filter: { id: { eq: $id } }) {
      title
      description
      id
      collection {
        title
        id
      }
    }
  }
`;
