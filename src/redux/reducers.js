import {
  ADD_FAVOURITES,
  REMOVE_FAVOURITE,
  FETCH_FAIL,
  FETCH_SUCCESS,
  GET_ID,
} from "./types";
const initialState = {
  favorites: [],
  loadingFavorites: false,
  lockButton: "",
};
export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,
        loadingFavorites: false,
        lockButton: false,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        loadingFavorites: false,
        lockButton: false,
        favorites: state.favorites.filter(
          (dog) => dog.dogId !== action.payload
        ),
      };
    case FETCH_FAIL:
      return { ...state, loadingFavorites: false };
    case FETCH_SUCCESS:
      return { ...state, favorites: action.payload, loadingFavorites: false };
    case GET_ID:
      return { ...state, lockButton: action.payload };
    default:
      return state;
  }
};
