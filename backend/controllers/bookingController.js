import Book from "../models/Booking.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

// Register a booking
// Save on DB
export const registerBooking = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      name,
      email,
      phone,
      checkInDate,
      checkOutDate,
      noRooms,
      adults,
      tourGuide,
      noDays,
      priceDays,
      tourGuidePrice,
      totalAmount,
    } = req.body;

    // Create booking
    const booking = await Book.create({
      name,
      email,
      phone,
      checkInDate,
      checkOutDate,
      noRooms,
      adults,
      tourGuide,
      noDays,
      priceDays,
      tourGuidePrice,
      totalAmount,
    });

    // Sending email using RESEND
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Kalash Villa",
      html: "<strong>Your booking at Kalash Villa has been confirmed!</strong>",
    });

    console.log("-----------> Booking registered");

    res.status(201).json({
      success: true,
      message: "Booking registered",
      data: {
        booking: {
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
        },
      },
    });
  } catch (err) {
    console.log("Registration error");
    res.status(500).json({
      success: false,
      message: "Error registering booking",
      error: err.message,
    });
  }
};

// Get bookings data
// Fetch from DBs

export default registerBooking;
