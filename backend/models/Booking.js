import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    // unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    // unique: true,
    // match: [/^\+[1-9]\d{6,14}$/, "Please enter a valid number"],
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  noRooms: {
    type: Number,
    required: [true, "Please provide Rooms required"],
  },
  adults: {
    type: Number,
  },
  tourGuide: {
    type: Boolean,
    default: "no",
  },
  noDays: {
    type: Number,
    required: [true, "Please select number of days"],
  },
  priceDays: {
    type: Number,
  },
  tourGuidePrice: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
});

const Book = mongoose.model("Booking", bookingSchema);
export default Book;
