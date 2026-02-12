import { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
  data: []
};

function apiReducer(state, action) {
  switch (action.type) {
    case "FETCH_DATASET_START":
      return {
        ...state,
        loading: true,
        error: ""
      };

    case "FETCH_DATASET_SUCCESS":
      return {
        loading: false,
        error: "",
        data: action.payload
      };

    case "FETCH_DATASET_ERROR":
      return {
        loading: false,
        error: action.payload,
        data: []
      };

    default:
      return state;
  }
}

export function useFetch(endpoint) {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    if (!endpoint) return;

    dispatch({ type: "FETCH_DATASET_START" });

    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        dispatch({
          type: "FETCH_DATASET_SUCCESS",
          payload: json
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_DATASET_ERROR",
          payload: error.message
        });
      });
  }, [endpoint]);

  return state;
}
