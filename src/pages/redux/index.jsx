import { View, Text, Button } from "@tarojs/components";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  fetchHomeMutiData,
} from "../../store/modules/home";
import "./index.scss";

const Redux = memo(function () {
  // 读取redux中的数据
  const counter = useSelector((state) => {
    return state.home.counter; // state.home  拿到home模块的state
  });

  // 接受redux的dispatch函数
  const dispatch = useDispatch();

  // 利用redux的increment和decrement进行增加和删除操作
  function addNumber() {
    dispatch(increment(1));
  }

  function subNumber() {
    dispatch(decrement(-1));
  }

  // 编写一个异步的action
  function getHomeData() {
    dispatch(fetchHomeMutiData(100));
  }

  return (
    <View className="redux">
      <Text>{counter}</Text>
      <Button onClick={addNumber}>增加</Button>
      <Button onClick={subNumber}>减少</Button>
      <Button onClick={getHomeData}>获取数据</Button>
    </View>
  );
});

export default Redux;
