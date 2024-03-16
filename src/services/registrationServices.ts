import { Registration, User } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../config/prisma";

const getRegis: any = async (req: Request, res: Response) => {
  try {
    const registrations: Registration[] = await prisma.registration.findMany();
    return res
      .status(200)
      .json({ Count: registrations.length, data: registrations });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export { getRegis };
