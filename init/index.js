const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const cropData = require("./cropData.js");
const crop = require("../models/crop.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/DEPROJECT");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

const cropDB = async () => {
  await crop.deleteMany({});
  await crop.insertMany(cropData.data);
  console.log("crop data was initialized");
};

initDB();
cropDB();
