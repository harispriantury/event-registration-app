import express from "express";
import {
  createEvent,
  getEventById,
  getEvents,
} from "../services/eventServices";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.get("/events", verifyToken, getEvents);
router.get("/events/:id", getEventById);
router.post("/events", verifyToken, createEvent);

export default router;
