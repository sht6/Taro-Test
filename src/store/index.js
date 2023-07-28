// 创建store对象，合并子reducer(reducer的切片)
import { configureStore } from "@reduxjs/toolkit"
import homeSlice from "./modules/home.js"


const store = configureStore({
  // root reducer
  reducer: {
    home:homeSlice
  },
  // devTools:true
})

export default store;
