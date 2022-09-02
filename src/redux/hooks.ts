import { 
    useSelector as useReduxSelector,
    TypedUseSelectorHook
} from "react-redux";
import {RootState} from "./store"
//每次使用hook时都要指定store的类型，那就意味着组件与store绑定起来了，而组件与store的深度绑定会导致组件无法复用
export const useSelector:TypedUseSelectorHook<RootState> = useReduxSelector