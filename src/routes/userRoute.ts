import express from "express";
import { getUsers, login, register } from "../services/userServices";
import verifyToken from "../middleware/authMiddleware";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: users
 *   description: The books managing API
 * /users:
 *   get:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */
router.get("/users", verifyToken, getUsers);
router.post("/auth/register", register);
router.post("/auth/login", login);

export default router;
