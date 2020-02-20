import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentsService {
  async getAll() {
    return await _repository.find({});
  }

  async getCommentsByLogId(id) {
    return await _repository.find({ logId: id })
  }

  async getEverythingWritenBy(author) {
    return await _repository.find({ author: author })
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async findCommentsByShipId(id) {
    return await _repository.find({ shipId: id })
  }

  async create(body) {
    return await _repository.create(body);
  }

  async update(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })

  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);

  }
}

const commentsService = new CommentsService();
export default commentsService;
