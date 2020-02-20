import express from "express";
import shipsService from "../services/ShipsService";
import logsService from "../services/LogsService"
import commentsService from "../services/CommentsService"

export default class ShipsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/logs", this.getLogsByShipId)
      .get("/:id/comments", this.getCommentsByShipId)

      .get("/by/:author", this.getLogsWritenBy)
      .get("/comsby/:author", this.getCommentsWritenBy)
      // .get("/:author/logs", this.getLogsWritenBy)
      // .get("/:author/comments", this.getLogsWritenBy)

      //get child by parent id, goes in the parent collection
      // api/burgers/BURGERID/combos
      //.get("/:id/combos", this.getCombosByBurgerId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete);
  }

  async getAll(req, res, next) {
    try {
      let data = await shipsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await shipsService.findById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getLogsByShipId(req, res, next) {
    try {
      let data = await logsService.findLogsByShipId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getCommentsByShipId(req, res, next) {
    try {
      let data = await commentsService.findCommentsByShipId(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }


  async getLogsWritenBy(req, res, next) {
    try {
      let data = await logsService.getEverythingWritenBy(req.params.author);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getCommentsWritenBy(req, res, next) {
    try {
      let data = await commentsService.getEverythingWritenBy(req.params.author);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await shipsService.create(req.body);
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await shipsService.update(req.params.id, req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await shipsService.delete(req.params.id);
      res.send("Delorted");
    } catch (error) {
      next(error);
    }
  }
}