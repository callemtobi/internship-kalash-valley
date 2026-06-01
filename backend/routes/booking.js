import express from "express";
import {
  registerBooking,
  //   getBookings,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/register", registerBooking);
// router.get("/getBookings", getBookings);

export default router;
