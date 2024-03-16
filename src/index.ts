import { PrismaClient, User } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";
import UserRoute from "../src/routes/userRoute";
import EventRoute from "../src/routes/eventRoute";
import RegisRoute from "../src/routes/registrationRoute";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json("hello world");
});

// app.post("/users", async (req: Request, res: Response) => {
//   try {
//     const user: User = req.body;
//     await prisma.user.create({
//       data: user,
//     });
//     return res.status(201).json(user);
//   } catch (error) {
//     return res.status(501).json("error");
//   }
// });

app.use(UserRoute);
app.use(EventRoute);
app.use(RegisRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// handle 404 error
app.use((req: Request, res: Response, next: Function) => {
  next(createError(404));
});

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:3000`)
);
