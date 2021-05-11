import {
  LOAD_STARSHIPS_DATA,
  SET_LOADING,
  SET_PAGE
} from "./actionTypes";

export interface IStarshipList {
  count: number
  next: string | null
  previous: string | null
  results: IStarshipItem[]
}

export interface IStarshipItem {
  name: string
  model: string
  starship_class: string
  hyperdrive_rating: string
  passengers: string
  manufacturer: string
}

export type LoadingAction = {
  type: typeof SET_LOADING
  payload: { isLoading: boolean }
}

export type LoadStarshipsData = {
  type: typeof LOAD_STARSHIPS_DATA
  payload: IStarshipList
}

export type SetPage = {
  type: typeof SET_PAGE
  payload: number
}

export type ActionType =
  LoadingAction |
  LoadStarshipsData |
  SetPage;

export interface IAppState {
  isLoading: boolean
  starshipsData: IStarshipList | null
  pageNumber: number
}
