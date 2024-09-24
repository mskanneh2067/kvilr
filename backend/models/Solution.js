import mongoose from "mongoose";

const solutionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is a required field."],
      maxlength: [30, "Name must be less than or equal 30 characters "],
      minlength: [5, "Name must be more than 5 characters "],
    },
    photo: {
      type: String,
      required: [true, "photo is a required field."],
    },
  },
  { timestamps: true }
);

const Solution = mongoose.model("Solution", solutionSchema);
export default Solution;
