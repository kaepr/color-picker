import { gql } from "@apollo/client";

export const GET_ALL_COLORS = gql`
  subscription MySubscription {
    color_palettes {
      hex_code
      id
      label_name
      rgb_code
    }
  }
`;

export const ADD_COLOR = gql`
  mutation($hex_code: String!, $label_name: String!, $rgb_code: String!) {
    insert_color_palettes(
      objects: {
        hex_code: $hex_code
        label_name: $label_name
        rgb_code: $rgb_code
      }
    ) {
      returning {
        id
        hex_code
        rgb_code
        label_name
      }
    }
  }
`;

export const UPDATE_LABEL = gql`
  mutation($id: uuid!, $label_name: String!) {
    update_color_palettes(
      where: { id: { _eq: $id } }
      _set: { label_name: $label_name }
    ) {
      returning {
        id
        label_name
        rgb_code
        hex_code
      }
    }
  }
`;

export const DELETE_COLOR = gql`
  mutation($id: uuid!) {
    delete_color_palettes(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;

export const GET_ALL_COLORS_QUERY = gql`
  query MyQuery {
    color_palettes {
      hex_code
      id
      label_name
      rgb_code
    }
  }
`;
