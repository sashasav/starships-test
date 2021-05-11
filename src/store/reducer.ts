import {
  LOAD_STARSHIPS_DATA,
  SET_LOADING,
  SET_PAGE
} from "./actionTypes";
import {IAppState, LoadingAction, LoadStarshipsData, SetPage} from "./types";

const initialState: IAppState = {
  isLoading: false,
  starshipsData: null,
  pageNumber: 1
}

const reducer = (state = initialState, action: LoadingAction | LoadStarshipsData | SetPage): IAppState => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, isLoading: action.payload.isLoading};
    case LOAD_STARSHIPS_DATA:
      return {...state, starshipsData: action.payload}
    case SET_PAGE:
      return {...state, pageNumber: action.payload}
  }
  return state;
}

export default reducer;
