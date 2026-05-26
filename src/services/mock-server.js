// 这是一个简单的 mock 服务器，用于本地开发测试
// 运行方式：node server/mock-server.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// 模拟联系表单提交
app.post("/contact", (req, res) => {
  console.log("收到表单提交:", req.body);
  res.json({
    success: true,
    message: "表单提交成功，我们将于3个工作日内回复",
  });
});

// 模拟获取新闻列表
app.get("/news", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        title: "千嶂巡将参加2026珠海航展",
        date: "2026-11-15",
        category: "展会",
      },
      { id: 2, title: "TAS系统正式上线", date: "2026-10-20", category: "合作" },
    ],
    total: 2,
  });
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
