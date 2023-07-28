import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "@/service/home.js";

// 定义异步的anciton
export const fetchHomeMutiData = createAsyncThunk(
  "/home/multidata", // 请求状态 这个会作为 anction type的前缀
  async (payload) => {
    console.log(payload);
    const res = await getHomeData();
    return res.data;
  }
);

// 创建slice reduce
const homeSlice = createSlice({
  name: "home", // 唯一，这个名字会作为antion type的前缀
  initialState: {
    // 初始化state，定义默认值
    counter: 800,
    homeData: null,
  },
  reducers: {
    increment(state, actions) {
      const { payload } = actions;
      state.counter += payload;
    },
    decrement(state, actions) {
      console.log(state, actions);
      const { payload } = actions;
      state.counter += payload;
    },
  },
  // 监听一个异步事件回调的结果
  extraReducers: (builder) => {
    builder.addCase(fetchHomeMutiData.fulfilled, (state, actions) => {
      console.log(state, actions.payload);
    });
  },
});

//是同步action
// 例如： increment type:home/increment
export const { increment, decrement } = homeSlice.actions;
// 导出reducer （子reducer，需要拿去进行合并）
export default homeSlice.reducer;
