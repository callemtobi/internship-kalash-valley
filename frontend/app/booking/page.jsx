"use client";

import NavBar from "@components/Nav";
import BookingMain from "@components/BookingMain";
import Form from "@components/BookingForm";
import Footer from "@components/Footer";

export default function Booking() {
  return (
    <>
      <NavBar />
      <BookingMain />
      <Form />
      <Footer />
    </>
  );
}
