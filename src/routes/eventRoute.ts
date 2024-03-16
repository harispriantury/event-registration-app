import express from "express";
import { getEvents } from "../services/eventServices";

const router = express.Router();

router.get("/events", getEvents);

export default router;
