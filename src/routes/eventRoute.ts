import express from "express";
import {
  createEvent,
  deleteEvent,
  editEvent,
  getEventById,
  getEvents,
} from "../services/eventServices";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.get("/events", verifyToken, getEvents);
router.get("/events/:id", getEventById);
router.post("/events", verifyToken, createEvent);
router.patch("/events/:id", verifyToken, editEvent);
router.delete("/events/:id", verifyToken, deleteEvent);
export default router;
