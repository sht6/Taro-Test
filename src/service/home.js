import hyRequest from "./index.js";

export const getHomeData = () => {
  return hyRequest.get("/home/multidata", {});
};
