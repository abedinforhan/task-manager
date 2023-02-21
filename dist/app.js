import express from "express";
const app = express();
const port = 5000 || process.env.PORT;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res, next) => {
    res.status(200).json({ message: "hi" });
    next();
});
app.listen(port, () => {
    console.log(`Port is running on ${port}`);
});
