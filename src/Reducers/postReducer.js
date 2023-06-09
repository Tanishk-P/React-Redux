import { FETCH_POSTS, NEW_POSTS } from "../Actions/types";

const initialState = {
  postList: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postList: action.payload,
      };
      case NEW_POSTS:
        return {
          ...state,
          item: action.payload
        }
    default:
      return state;
  }
}
