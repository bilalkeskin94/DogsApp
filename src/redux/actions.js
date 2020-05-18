import {
  ADD_FAVOURITES,
  REMOVE_FAVOURITE,
  FETCH_FAIL,
  FETCH_SUCCESS,
  GET_ID,
} from "./types";
import axios from "axios";
const apiHost = "https://5eb5b526de5849001638b9f5.mockapi.io";

export const addFavourite = (dogId) => {
  return (dispatch) => {
    axios
      .post(`${apiHost}/favorites`, {
        dogId,
      })
      .then((result) => {
        const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
        dispatch({
          type: ADD_FAVOURITES,
          payload: eklenenFavori,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeFavourite = (foundDog, dogId) => {
  return (dispatch) => {
    axios.delete(`${apiHost}/favorites/${foundDog}`).then((result) => {
      dispatch({
        type: REMOVE_FAVOURITE,
        payload: dogId,
      });
    });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(`${apiHost}/favorites`)
      .then((result) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log("Axios err", err);
        dispatch({
          type: FETCH_FAIL,
        });
      });
  };
};

export const getId = (dogId) => {
  return (dispatch) => {
    dispatch({
      type: GET_ID,
      payload: dogId,
    });
  };
};
