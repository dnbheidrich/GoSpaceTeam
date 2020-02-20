import express from "express";
import commentsService from "../services/CommentsService";

export default class CommentsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      //get child by parent id, goes in the parent collection
      // api/burgers/BURGERID/combos
      //.get("/:id/combos", this.getCombosByBurgerId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await commentsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await commentsService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }


  async create(req, res, next) {
    try {
      let data = await commentsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await commentsService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await commentsService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}