const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const crop = require("./models/crop.js");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const session = require("express-session");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const MongoStore = require("connect-mongo");
const axios = require("axios");
app.use(express.json());

const mongoose = require("mongoose");

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/DEPROJECT");
}

// app.use(
//   session({
//     secret: "mysecratecode",
//     resave: false,
//     saveUninitialized: true,

//     store: MongoStore.create({
//       mongoUrl: "mongodb://127.0.0.1:27017/DEPROJECT",
//       collectionName: "sessions", // Optional, default is "sessions"
//     }),

//     cookie: {
//       expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//       httpOnly: true,
//     },
//   })
// );

const sessionConfig = {
  secret: "mysecratecode",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017/DEPROJECT",
    collectionName: "sessions", // Optional: Default is "sessions"
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currUser = req.user;

  next();
});

app.get("/recommend-crop", (req, res) => {
  res.render("recommend.ejs", { recommendation: null, error: null });
});

app.post("/recommend-crop", async (req, res) => {
  try {
    const { soil, temperature, rainfall } = req.body;

    const response = await axios.post("http://127.0.0.1:5000/recommend", {
      soil,
      temperature,
      rainfall,
    });
    console.log(response.data);
    res.render("recommend.ejs", {
      recommendation: response.data.recommended_crop,
      error: null,
    });
  } catch (error) {
    res.render("recommend", {
      recommendation: null,
      error: "AI Service Unavailable",
    });
  }
});

app.get("/videos", (req, res) => {
  res.render("listings/video.ejs");
});

//authantication
app.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

app.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const newUser = new User({ email, username });
  const registerdUser = await User.register(newUser, password);
  req.logIn(registerdUser, (err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/listings");
  });
});

app.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  async (req, res) => {
    res.redirect("/listings");
  }
);

app.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/listings");
  });
});

//daily crop price
//daily crop price
app.get("/listings/crop", async (req, res) => {
  const crops = await crop.find({});
  res.render("listings/crop.ejs", { crops });
});

// //change crop price

app.put("/listings/crop/:id", async (req, res) => {
  let { id } = req.params;
  let { price } = req.body;
  const updatedPrice = await crop.findByIdAndUpdate(id, { price });
  res.redirect("/listings/crop");
});

app.get("/listings/crop/:id", async (req, res) => {
  const { id } = req.params;
  const cropDetails = await crop.findById(id);
  res.render("listings/cropPriceEdit.ejs", { cropDetails });
});

//gov Schme route
// app.get("/listings/gov", (req, res) => {
//   res.redirect("https://ikhedut.gujarat.gov.in/");
// });

//index route
app.get("/listings", async (req, res) => {
  const listings = await Listing.find({});
  // console.log(listings);
  res.render("listings/index.ejs", { listings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.post("/listings", async (req, res) => {
  const allListFromNewEjs = req.body.listing;
  const newList = new Listing(allListFromNewEjs);
  await newList.save();
  res.redirect("/listings");
});

//show route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Listing.findById(id);
  // console.log(item);
  res.render("listings/show.ejs", { item });
});

//edit update route
app.get("/listings/:id/edit", async (req, res) => {
  const { id } = req.params;
  const item = await Listing.findById(id);
  res.render("listings/edit.ejs", { item });
});

app.put("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const updatedList = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  // console.log(updatedList);
  res.redirect(`/listings/${id}`);
});

//delete listings
app.delete("/listings/:id", async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

app.listen(8080, () => {
  console.log("server runnig on port 8080...");
});
