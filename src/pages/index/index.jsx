import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    const app = Taro.getApp();
    console.log(app.name);
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
    </View>
  );
}
