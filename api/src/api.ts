import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/drugs", async (req, res) => {
    res.json(await prisma.drug.findMany({}));
});

app.listen(8000, () =>
    console.log("api ready, checkout http://localhost:8000/drugs")
);
