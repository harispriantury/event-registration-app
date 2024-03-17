import { Registration, User } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../config/prisma";
import { useValidateRegis } from "../utils/useValidateRegis";

const getRegis: any = async (req: Request, res: Response) => {
  try {
    const registrations: Registration[] = await prisma.registration.findMany({
      include: {
        event: true,
      },
    });
    return res
      .status(200)
      .json({ Count: registrations.length, data: registrations });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const createRegis: any = async (req: Request, res: Response) => {
  try {
    const { eventId, name, email, phoneNumber, status } = req.body;
    const error = useValidateRegis(eventId, name, email, phoneNumber, status);
    if (error) {
      return res.status(404).json({ error: error });
    }
    const event = await prisma.event.findFirst({
      where: { event_id: Number(eventId) },
      include: { registrations: true },
    });

    if (!event) {
      return res.status(404).json({ error: "event not found" });
    }

    //validate capacity
    if (event.registrations.length >= event.capacity) {
      return res.status(404).json({ error: "quota full" });
    }

    const result = await prisma.registration.create({
      data: {
        name,
        email,
        event_id: eventId,
        phone_number: phoneNumber,
        status,
      },
    });

    return res.status(201).json({ message: "success", data: result });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export { getRegis, createRegis };
