const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    Required: [true, "`{PATH} boş olmamalıdır`"],
    maxlength: [16, "`{PATH}` olcusu `{MAXLENGTH}-dan cox olmamalidi`"],
  },
  imdb: { type: Number ,max:10,min:0},
  category: String,
  year: Number,
  country: String,
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("movie", MovieSchema);
