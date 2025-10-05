import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/expenses`)
      .then(res => res.json())
      .then(data => setExpenses(data));
  }, []);

  const addExpense = async () => {
    const newExpense = { title, amount };
    const res = await fetch(`${API_URL}/api/expenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    });
    const data = await res.json();
    setExpenses([...expenses, data]);
    setTitle("");
    setAmount("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Budget Tracker</h1>
      <input
        placeholder="Titolo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        placeholder="Importo"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Aggiungi</button>

      <ul>
        {expenses.map(e => (
          <li key={e.id}>{e.title} - €{e.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
