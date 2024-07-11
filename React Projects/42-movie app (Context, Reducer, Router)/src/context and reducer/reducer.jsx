import {
  ADD_TO_WATCHED,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHED,
  REMOVE_FROM_WATCHLIST,
} from "./type";

const initialState = {
  watched: [],
  watchlist: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
      };

    case ADD_TO_WATCHED:
      return {
        ...state,
        watched: action.payload,
      };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: action.payload,
      };
    case REMOVE_FROM_WATCHED:
      return {
        ...state,
        watched: action.payload,
      };

    default:
      throw new Error("cannot match case in reducer");
  }
}

export default reducer;
export { initialState };
