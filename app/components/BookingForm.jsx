"use client";

import { Leaf } from "lucide-react";
import IntroButton from "./IntroButton";
import axios from "axios";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const prices = {
    roomPrice: 2000,
    dayPrice: 2000,
    tourGuidePrice: 3500,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    noRooms: "",
    adults: "",
    tourGuide: "",
    noDays: "",
    priceDays: "",
    tourGuidePrice: "",
    totalAmount: "",
  });

  const notify = () => toast("Booking registered");

  const handleChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCal = async (e) => {
    const noDays = Number(e.target.value);
    const noRooms = Number(formData.noRooms) || 0;

    const priceOfStay = noRooms * prices.roomPrice + noDays * prices.dayPrice;

    setFormData((prev) => ({
      ...prev,
      priceDays: priceOfStay,
    }));
  };

  const handleRoomPrice = async (e) => {
    const rooms = Number(e.target.value);
    const noDays = Number(formData.noDays) || 0;

    const priceOfDaysandRoom =
      rooms * prices.roomPrice + noDays * prices.dayPrice;

    setFormData((prev) => ({
      ...prev,
      priceDays: priceOfDaysandRoom,
    }));
  };

  const handleTourGuidePrice = async (e) => {
    const selectedValue = e.target.value;

    setFormData((prev) => ({
      ...prev,
      tourGuide: selectedValue,
      tourGuidePrice: selectedValue === "yes" ? prices.tourGuidePrice : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // const missingFields = Object.entries(formData)
    //   .filter(([key, value]) => !value)
    //   .map(([key]) => key);

    // if (missingFields.length > 0) {
    //   // alert(`Missing fields: ${missingFields.join(", ")}`);
    //   setError("Please fill in all the required fields");
    //   setLoading(false);
    //   return;
    // }

    // const totalAmount =
    //   Number(formData.priceDays || 0) + Number(formData.tourGuidePrice || 0);

    const finalData = {
      ...formData,
      totalAmount,
    };

    console.log("Form Submitted");

    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "http://localhost:8000/api/bookings/register",
        finalData,
        {
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${getAuthToken()}`,
          },
          timeout: 1000,
        },
      );
      console.log("Booking Response:", response.data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkInDate: "",
        checkOutDate: "",
        noRooms: "",
        adults: "",
        tourGuide: "",
        noDays: "",
        priceDays: "",
        tourGuidePrice: "",
        totalAmount: "",
      });
      // Handle success (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      // console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  // const handleTotalAmount = async () => {
  const totalAmount =
    Number(formData.priceDays || 0) + Number(formData.tourGuidePrice || 0);

  //   setFormData((prev) => ({
  //     ...prev,
  //     totalAmount,
  //   }));
  // };

  // useEffect(() => {
  //   handleTotalAmount();
  // }, [formData.priceDays, formData.tourGuidePrice]);

  return (
    <section className="container">
      {/* --------------------------------------------------------------- */}
      <div className="text-center my-5">
        <h2 className="p-2 fs-2 fw-bolder border-bottom">Step 1</h2>
        <span className="bg-danger w-100" style={{ width: "5px" }}></span>
      </div>
      <IntroButton>Book Your Stay at Kalash Villa</IntroButton>

      {/* --------------------------------------------------------------- */}
      <form
        className="row container needs-validation"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Name */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.name}
                name="name"
                className="form-control"
                type="text"
                placeholder="Your name..."
                required
              ></input>
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                required
                className="form-control"
                type="email"
                placeholder="Email..."
              ></input>
            </div>
          </div>
        </div>
        {/* Phone */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.phone}
                name="phone"
                required
                className="form-control"
                type="tel"
                placeholder="Phone..."
              ></input>
            </div>
          </div>
        </div>
        {/* Checkin */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mb-3">
            <label className="form-label">Check-in Date</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.checkInDate}
                name="checkInDate"
                required
                className="form-control"
                type="date"
                // placeholder="May 5, 2026"
              ></input>
            </div>
          </div>
        </div>
        {/* Check out */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mb-3">
            <label className="form-label">Check-in Out</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.checkOutDate}
                name="checkOutDate"
                required
                className="form-control"
                type="date"
                // placeholder="May 10, 2026"
              ></input>
            </div>
          </div>
        </div>
        {/* Rooms */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mb-3">
            <label className="form-label">No. Rooms</label>
            <div className="input-group">
              <input
                min={1}
                // onChange={handleChange}
                onChange={(e) => {
                  handleChange(e);
                  handleRoomPrice(e);
                }}
                value={formData.noRooms}
                name="noRooms"
                required
                className="form-control"
                type="number"
                // placeholder="2 Rooms"
              ></input>
            </div>
          </div>
        </div>
        {/* Adults */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="mb-3">
            <label className="form-label">Adults</label>
            <div className="input-group">
              <input
                onChange={handleChange}
                value={formData.adults}
                name="adults"
                required
                className="form-control"
                type="number"
              ></input>
            </div>
          </div>
        </div>
        {/* Price of Days and Rooms */}
        <div className="col-12 col-md-6 col-lg-12">
          <div className="mb-3">
            <label className="form-label">Price of Days & Rooms</label>
            <div className="input-group">
              <span className="input-group-text">Price RS: </span>
              <input
                // onChange={handleChange}
                value={formData.priceDays}
                name="priceDays"
                className="form-control"
                type="number"
                // placeholder="12,000"
                readOnly
              ></input>
            </div>
          </div>
        </div>
        {/* Tour Guide Required */}
        <div className="col-12 col-md-6 col-lg-12 ">
          <div className="mb-3">
            <label className="form-label">Tour Guide Required?</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  // onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                    handleTourGuidePrice(e);
                  }}
                  value="yes"
                  name="tourGuide"
                  required
                  className="form-check-input"
                  type="radio"
                  checked={formData.tourGuide === "yes"}
                ></input>
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check ">
                <input
                  // onChange={handleChange}
                  onChange={(e) => {
                    handleChange(e);
                    handleTourGuidePrice(e);
                  }}
                  value="no"
                  name="tourGuide"
                  required
                  className="form-check-input"
                  type="radio"
                  checked={formData.tourGuide === "no"}
                ></input>
                <label className="form-check-label">No</label>
              </div>
            </div>
          </div>
        </div>
        {/* Number of days */}
        <div className="col-12 col-md-6 col-lg-12">
          <label className="form-label">Number of days</label>
          <div className="input-group mb-3">
            <select
              className="form-select"
              onChange={(e) => {
                handleChange(e);
                handleCal(e);
              }}
              value={formData.noDays}
              name="noDays"
            >
              <option value={""} disabled>
                Select...
              </option>
              {[...Array(9)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1} Day
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Tour Guide */}
        <div className="col-12 col-md-6 col-lg-12">
          <div className="mb-3">
            <label className="form-label">Tour Guide Service</label>
            <div className="input-group">
              <span className="input-group-text">Price RS: </span>
              {/* <span className="input-group-text">3,500</span> */}
              <input
                onChange={handleChange}
                value={formData.tourGuidePrice}
                name="tourGuidePrice"
                readOnly
                className="form-control"
                type="number"
              ></input>
            </div>
          </div>
        </div>
        {/* Total Amount */}
        <div className="col-12 col-md-6 col-lg-12">
          <div className="mb-3">
            <label className="form-label">Total Amount</label>
            <div className="input-group">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {(formData.noDays || formData.noRooms) && (
                    <tr>
                      <td>Price of Rooms & Days</td>
                      <td>
                        {Number(formData.noDays) + Number(formData.noRooms) ||
                          0}
                      </td>
                      <td>{formData.priceDays}</td>
                    </tr>
                  )}
                  {formData.tourGuide === "yes" && (
                    <tr>
                      <td>Tour Guide Service</td>
                      <td>1</td>
                      <td>{formData.tourGuidePrice}</td>
                    </tr>
                  )}
                  <tr>
                    <th>Total</th>
                    <td></td>
                    {/* <td>{formData.totalAmount}</td> */}
                    <td>{totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <button
            type="submit"
            disabled={loading}
            onClick={notify}
            className="btn text-light rounded-pill w-50"
            style={{ backgroundColor: "#7B4A1E" }}
          >
            Next
          </button>
          <Toaster />
        </div>
      </form>
      {error && (
        <div className="container border border-danger rounded-pill  border-pill text-danger w-50 mt-4">
          <p className="text-sm text-red-600 mt-2 text-center">{error}</p>
        </div>
      )}
    </section>
  );
}
