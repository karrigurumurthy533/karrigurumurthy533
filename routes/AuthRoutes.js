import express from "express";
import {
  getSignup,
  postSignup,
  getLogin,
  postLogin,
  getDashboard,
  logout
} from "../controllers/AuthController.js";

const router = express.Router();

router.get("/signup", getSignup);
router.post("/signup", postSignup);

router.get("/login", getLogin);
router.post("/login", postLogin);

router.get("/dashboard", getDashboard);

router.get("/logout", logout);

export default router;
