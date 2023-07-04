import { configureStore,combineReducers }from "@reduxjs/toolkit"; //中间件用于执行异步任务
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";

const rootReducer = combineReducers({
    language:languageReducer,
    recommendProducts:recommendProductsReducer
})

const store = configureStore({
    reducer: rootReducer,
    // middleware:[thunk,actionLog]
    middleware:[thunk],
    devTools:true
})
export type RootState = ReturnType<typeof store.getState>




export default store;