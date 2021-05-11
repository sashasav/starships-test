import {
  LOAD_STARSHIPS_DATA,
  SET_LOADING,
  SET_PAGE
} from "./actionTypes";
import {ActionType, IAppState, LoadingAction} from "./types";
import {ThunkAction} from 'redux-thunk';

type ActionTypeThunk<R> = ThunkAction<R, IAppState, unknown, ActionType>;

export const setLoading = (isLoading: boolean): LoadingAction => ({
  type: SET_LOADING,
  payload: {isLoading}
});

export const loadData = (loadPage: number): ActionTypeThunk<void> => async (dispatch) => {
  dispatch(setLoading(true));
  const response = await fetch(`${process.env.REACT_APP_API}starships/${loadPage === 1 ? '' : '?page=' + loadPage}`)
    .then((res) => res.json());
  if (response) {
    dispatch(setLoading(false));
    dispatch({
      type: LOAD_STARSHIPS_DATA,
      payload: response
    });
  }
};

export const setPageNumber = (pageNumber: number) => ({
  type: SET_PAGE,
  payload: pageNumber
});
