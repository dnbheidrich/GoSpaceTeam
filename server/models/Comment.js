import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Comment = new Schema(
  {
    author: { type: String, required: true },
    comment: { type: String, required: true },
    logId: { type: ObjectId, ref: "Log", required: true },
    shipId: { type: ObjectId, ref: "Ship", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;