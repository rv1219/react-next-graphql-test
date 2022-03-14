import { IAPIResponse } from '@/interfaces/index'

export const SET_PAGE = 'SET_PAGE';
export const SET_API_DATA = 'SET_API_DATA';

interface ISetApiData extends IAPIResponse {
    type: string,
}
export const setApiData = (data: IAPIResponse): ISetApiData => ({ type: SET_API_DATA, ...data })
