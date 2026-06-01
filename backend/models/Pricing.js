import mongooose from "mongoose";

const pricingSchema = new mongoose.Schema({
  roomPrice: {
    type: Number,
    required: true,
  },
  dayPrice: {
    type: Number,
    required: true,
  },
  tourGuidePrice: {
    type: Number,
    required: true,
  },
});

const Price = mongoose.model("Pricing", pricingSchema);
export default Price;
