const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const app = express();
const PORT = 8000;

// middleware
// to render static file middleware
app.use(express.static(path.resolve("./public")));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// DB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/node-auth")
  .then(() => console.log("DB Connected"));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);

// listen
app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
