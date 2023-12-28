const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors()); // since we will use a different api

// loading data // 27.12.23
const categories = require("./data/categories.json");
const allNews = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("dragon is runnig");
});

// loading all category
app.get("/categories", (req, res) => {
  // console.log(categories);
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(allNews);
});

// loading specific news
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const selectedNews = allNews.find((aNews) => aNews._id === id);
  res.send(selectedNews);
});

// loading category wise news
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  if (id == 0) {
    res.send(allNews);
  } else {
    const categoryNews = allNews.filter((aNews) => aNews.category_id === id);
    res.send(categoryNews);
  }
});
// app.get("/categories/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   // console.log(id);
//   if (id == 0) {
//     res.send(allNews);
//   } else {
//     const categoryNews = allNews.filter(
//       (aNews) => parseInt(aNews.category_id) === id
//     );
//     res.send(categoryNews);
//   }
// });
app.listen(port, () => {
  console.log(`dragon api is running on port ${port}`);
});
