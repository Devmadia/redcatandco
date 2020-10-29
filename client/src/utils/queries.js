import gql from 'graphql-tag';

export const QUERY_USER = gql `
    query user($email: String!) {
        user(email: $email) {
            firstName
            lastName
            email
            orders {
              _id
              purchaseDate
              products {
                _id
                name
                description
                price
                quantity
                image
              }
            }
        }
    }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;