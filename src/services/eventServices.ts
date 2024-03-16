import { Request, Response } from "express";
import prisma from "../config/prisma";
import { Event, User } from "@prisma/client";
const getEvents: any = async (req: Request, res: Response) => {
  try {
    const events: any[] = await prisma.event.findMany();
    return res.status(200).json({ count: events.length, data: events });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const createEvents: any = async (req: Request, res: Response) => {
  try {
    const { name, description, date, location, capacity, username } = req.body;
    prisma.event.create({
      data: {
        name,
        username,
        description,
        date,
        location,
        capacity,
      },
    });
  } catch (error) {}
};

export { getEvents };
