import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

const port: number = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "hi" });
  next();
});

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
