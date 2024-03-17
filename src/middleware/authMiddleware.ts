import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  user?: any;
}

function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.header("Authorization");
    const token = authorizationHeader && authorizationHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "token tidak ada" });
    jwt.verify(token, "secret-key", (err: any, user: any) => {
      if (err != null) return res.sendStatus(401).json({ error: err });
      req.user = user;
    });
    next();
  } catch (error) {
    res.status(401).json({ error: error });
  }
}

export default verifyToken;
