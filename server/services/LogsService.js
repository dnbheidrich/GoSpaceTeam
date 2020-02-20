import mongoose from "mongoose";
import Log from "../models/Log";

const _repository = mongoose.model("Log", Log);

class LogsService {
  async getAll() {
    return await _repository.find({});
  }

  async getEverythingWritenBy(author) {
    return await _repository.find({ title: author })
  }

  async findById(id) {
    return await _repository.findById(id);
  }

  async findLogsByShipId(id) {
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

const logsService = new LogsService();
export default logsService;
