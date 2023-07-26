import { useLaunch } from "@tarojs/taro";
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
  return children;
}

export default App;
