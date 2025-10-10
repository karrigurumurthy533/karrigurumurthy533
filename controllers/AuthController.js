import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const getSignup = (req, res) => {
  res.render("signup", { message: null });
};

export const postSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.redirect("/login");
  } catch (error) {
    res.render("signup", { message: "User already exists or error occurred!" });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { message: null });
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.render("login", { message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.render("login", { message: "Invalid password!" });

    req.session.isAuth = true;
    req.session.user = user;
    res.redirect("/dashboard");
  } catch (error) {
    res.render("login", { message: "Something went wrong!" });
  }
};

export const getDashboard = (req, res) => {
  if (!req.session.isAuth) return res.redirect("/login");
  res.render("dashboard", { user: req.session.user });
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/login");
  });
};
