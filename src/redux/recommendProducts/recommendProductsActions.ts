import axios from "axios"
import { ThunkAction } from "redux-thunk"

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS"
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"

interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

export type RecommendProductAction =
    FetchRecommendProductStartAction |
    FetchRecommendProductSuccessAction |
    FetchRecommendProductFailAction

export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const fetchRecommendProductSuccessActionCreator = (data): FetchRecommendProductSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchRecommendProductFailActionCreator = (error): FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}

export const fetchDataActionCreator = (dispatch)=> {
    return async function fetchProduction() {
        dispatch(fetchRecommendProductStartActionCreator())
        try {
            const data = await axios.get("http://123.56.149.216:8080/api/productCollections", {
                headers: {
                    "x-icode": "CFC0937C3B3BC4F0"
                }
            }).then(({ data }) => {
                dispatch(fetchRecommendProductSuccessActionCreator(data))
            })
        } catch (error) {
            dispatch(fetchRecommendProductFailActionCreator(error))
        }
    }
}

