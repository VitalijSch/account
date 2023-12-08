import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import { config } from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM sign_up");
        res.send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/signUp", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const [result] = await db.query("INSERT INTO sign_up (first_name, last_name, email, password) VALUES (?,?,?,?)", [firstName, lastName, email, password]);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3001, () => {
    console.log("Server is running");
});