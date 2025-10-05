import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import Expense from "./models/Expense.js";

const app = express();
app.use(express.json());
app.use(cors());

// Test connessione e sync
sequelize.authenticate()
  .then(() => console.log("Connesso a MySQL"))
  .catch(err => console.error("Errore connessione DB:", err));

sequelize.sync().then(() => console.log("Tabelle create/aggiornate"));

// GET tutte le spese
app.get("/api/expenses", async (req, res) => {
  const expenses = await Expense.findAll();
  res.json(expenses);
});

// POST nuova spesa
app.post("/api/expenses", async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
});

app.listen(5000, () => console.log("Server su http://localhost:5000"));
