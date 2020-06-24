const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    `mongodb+srv://mongoose:Mongo@movie-api-hcpqd.mongodb.net/movie-api?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: false }
  );
  mongoose.connection.on("open", () => {
    console.log("connected server");
  });
  mongoose.connection.on("error", (err) => {
    console.log("_______________connected server error var qaqa!!!!:", err);
  });
  mongoose.Promise=global.Promise
};
