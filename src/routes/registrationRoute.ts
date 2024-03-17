import express from "express";
import { createRegis, getRegis } from "../services/registrationServices";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.get("/registrations", getRegis);
router.post("/registrations", createRegis);

export default router;
