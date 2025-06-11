const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cropSchema = new Schema({
  item: {
    type: String,
  },
  image: {
    default:
      "https://img.freepik.com/premium-vector/agriculture-farm-logo-vector-white-background_1266257-26647.jpg?w=740",
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/premium-vector/agriculture-farm-logo-vector-white-background_1266257-26647.jpg?w=740"
        : v,
    type: String,
  },
  price: {
    type: Number,
  },
});

const crop = mongoose.model("crop", cropSchema);

module.exports = crop;
