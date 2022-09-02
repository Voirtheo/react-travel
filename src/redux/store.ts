import { configureStore }from "@reduxjs/toolkit"; //中间件用于执行异步任务
import languageReducer from "./language/languageReducer";

const store = configureStore({
    reducer:{
        languageReducer
    }
})
export type RootState = ReturnType<typeof store.getState>

export default store;