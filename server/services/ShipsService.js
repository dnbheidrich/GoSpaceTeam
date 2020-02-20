import mongoose from "mongoose";
import Ship from "../models/Ship";

const _repository = mongoose.model("Ship", Ship);

class ShipsService {
  async getAll() {
    return await _repository.find({});
  }


  async findById(id) {
    return await _repository.findById(id);
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

const shipsService = new ShipsService();
export default shipsService;
