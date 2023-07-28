import { useLaunch } from "@tarojs/taro";
import { Provider } from "react-redux";
import store from "@/store";
import "./app.scss";

function App({ children }) {
  // 组件生命周期
  // useDidMount(() => {});

  // 应用的生命周期
  useLaunch(() => {
    console.log("App launched.");
  });

  //定义全局数据

  // children 是将要会渲染的页面
  // return children;
  return <Provider store={store}>{children}</Provider>;
}

export default App;
