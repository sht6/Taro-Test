import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";

export default function CTextTaro() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text>我是test组件</Text>
      <Button>我是一个button组件</Button>
    </View>
  );
}
