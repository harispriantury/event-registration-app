import express from "express";
import { getRegis } from "../services/registrationServices";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();

router.get("/registrations", verifyToken, getRegis);

export default router;
