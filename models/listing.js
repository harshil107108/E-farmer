const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
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
  description: {
    type: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
