import express from "express";
import { getRegis } from "../services/registrationServices";

const router = express.Router();

router.get("/registrations", getRegis);

export default router;
