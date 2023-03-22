import mongoose from "mongoose";

const proudctSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

export default mongoose.model("Product", proudctSchema);
