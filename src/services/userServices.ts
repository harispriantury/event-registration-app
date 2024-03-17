import { User } from "@prisma/client";
import { Request, Response, response } from "express";
import prisma from "../config/prisma";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

const getUsers: any = async (req: CustomRequest, res: Response) => {
  try {
    const users: User[] = await prisma.user.findMany({
      include: {
        events: true,
      },
    });
    return res.status(200).json({ Count: users.length, data: users });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const register: any = async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bycrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        username: username,
        password_hash: hashedPassword,
        email: email,
      },
    });

    return res.status(201).json({ data: "success registered" });
  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

const login: any = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user)
      return res
        .status(401)
        .json({ error: "authentication failed username not found" });

    const passwordMatch = await bycrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(404).json({ error: "password failed" });
    }

    const token = jwt.sign(user, "secret-key", {
      expiresIn: "10h",
    });
    return res
      .status(200)
      .json({ message: "login successfully", token: "bearer " + token });
  } catch (error) {}
};

export { getUsers, register, login };
