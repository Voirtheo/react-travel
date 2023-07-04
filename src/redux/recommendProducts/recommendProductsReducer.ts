import { FETCH_RECOMMEND_PRODUCTS_FAIL, FETCH_RECOMMEND_PRODUCTS_START, FETCH_RECOMMEND_PRODUCTS_SUCCESS, RecommendProductAction } from "./recommendProductsActions"
interface RecommendProductsState {
    productList: any[]
}

const defaultState: RecommendProductsState = {
    productList: []
}

export default (state = defaultState, action: RecommendProductAction) => {
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return { ...state }
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return { ...state, productList: action.payload }
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return { ...state, error: action.payload }
        default:
            return state
    }
}