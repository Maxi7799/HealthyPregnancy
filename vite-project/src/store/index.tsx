import { configureStore } from "@reduxjs/toolkit"
// import counter from "./chapter";
// 导出
import chapter from "./chapter";

export const store = configureStore({
  // 数据处理
  reducer: {
    chapter
  }
});