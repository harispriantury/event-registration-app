import { Request, Response } from "express";
import prisma from "../config/prisma";
import { Event, User } from "@prisma/client";
import { useValidateEvents } from "../utils/useValidateEvent";
interface CustomRequest extends Request {
  user?: any;
}

const getEvents: any = async (req: Request, res: Response) => {
  try {
    const events: any[] = await prisma.event.findMany();
    return res.status(200).json({ count: events.length, data: events });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const createEvent: any = async (req: CustomRequest, res: Response) => {
  try {
    const { name, description, date, location, capacity } = req.body;
    const errors = useValidateEvents(name, description, location, capacity);
    if (errors) {
      return res.status(404).json({ error: errors });
    }

    const user: User | null = await prisma.user.findFirst({
      where: {
        username: req.user.username,
      },
    });

    if (!user) {
      return res.status(404).json({ errors: "user not found" });
    }

    const result: Event = await prisma.event.create({
      data: {
        name,
        description,
        location,
        capacity,
        user: undefined,
        username: req.user.username,
        date: new Date("2000-03-24"),
      },
    });
    return res.status(201).json({ message: "success create ", data: result });
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

const getEventById: any = async (req: Request, res: Response) => {
  try {
    const result = await prisma.event.findFirst({
      where: {
        event_id: Number(req.params?.id),
      },
      include: {
        registrations: true,
      },
    });

    if (!result?.event_id) {
      return res.status(404).json({ error: "event not found" });
    }

    return res.status(200).json({ message: "success", data: result });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const editEvent: any = async (req: CustomRequest, res: Response) => {
  try {
    const event: Event | null = await prisma.event.findFirst({
      where: { event_id: Number(req.params.id) },
    });

    if (!event?.event_id) {
      return res.status(404).json({ error: "event not found" });
    }

    const { name, description, date, location, capacity } = req.body;
    const errors = useValidateEvents(name, description, location, capacity);
    if (errors) {
      return res.status(404).json({ error: errors });
    }

    const result = await prisma.event.update({
      where: {
        event_id: Number(req.params.id),
      },
      data: {
        name,
        description,
        location,
        capacity,
      },
    });

    return res.status(200).json({ message: "success", data: result });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const deleteEvent: any = async (req: CustomRequest, res: Response) => {
  try {
    const event: Event | null = await prisma.event.findFirst({
      where: { event_id: Number(req.params.id) },
    });

    if (!event?.event_id) {
      return res.status(404).json({ error: "event not found" });
    }

    const result = await prisma.event.delete({
      where: {
        event_id: Number(req.params.id),
      },
    });

    return res.status(200).json({ message: "success deleted", data: result });
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

export { getEvents, createEvent, getEventById, editEvent, deleteEvent };
