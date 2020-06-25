const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  name: {
    type: String,
    Required: [true, "`{PATH} boş olmamalıdır`"],
    maxlength: [100, "`{PATH}` olcusu `{MAXLENGTH}-dan cox olmamalidi`"],
    minlength:[2, "`{PATH}` olcusu `{MINLENGTH}-dan cox olmamalidi`"],
  },
  surname: {
    type: String,
    Required: [true, "`{PATH} boş olmamalıdır`"],
    maxlength: [100, "`{PATH}` olcusu `{MAXLENGTH}-dan cox olmamalidi`"],
    minlength:[2, "`{PATH}` olcusu `{MINLENGTH}-dan cox olmamalidi`"],
  },
  bio: String,
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("director", DirectorSchema);
