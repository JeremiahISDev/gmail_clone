const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/gmail", {
  useNewUrlParser: true,
});

app.listen(8000);
