import Taro from "@tarojs/taro";

const TIME_OUT = 60000;
const BASE_URL = "http://152.136.185.210:7878/api/hy66";

class HYRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  get(url, params) {
    return this.request(url, "GET", params);
  }

  post(url, data) {
    return this.request(url, "POST", data);
  }
}
export default new HYRequest();
