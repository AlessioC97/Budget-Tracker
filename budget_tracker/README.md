# Budget Tracker

Un’applicazione **fullstack** per tracciare le spese personali.  
Progetto sviluppato con **React (frontend)**, **Node.js + Express (backend)** e **MySQL (database)**, completamente eseguibile tramite **Docker Compose**.

---

## Tecnologie utilizzate
- **Frontend**: React + Vite  
- **Backend**: Node.js + Express + Sequelize  
- **Database**: MySQL  
- **Docker**: orchestrazione dei servizi

---

## Struttura progetto
```
budget-tracker-full-docker/
│── client/        # Frontend React
│   ├── src/       # Componenti React
│   ├── package.json
│   └── Dockerfile
│
│── server/        # Backend Node.js + Express
│   ├── models/    # Modelli Sequelize
│   ├── index.js   # Entrypoint server
│   ├── db.js      # Connessione DB
│   └── Dockerfile
│
│── docker-compose.yml   # Orchestrazione container
│── README.md
```

---

## ▶ Avvio rapido con Docker
1. Assicurati di avere installati:
   - [Docker Desktop](https://www.docker.com/products/docker-desktop/)  
   - [Git](https://git-scm.com/)  

2. Clona il repository:
   ```bash
   git clone https://github.com/TUO_USERNAME/budget-tracker-full-docker.git
   cd budget-tracker-full-docker
   ```

3. Avvia i container:
   ```bash
   docker compose up --build
   ```

4. Apri nel browser:
   - **Frontend** → [http://localhost:5173](http://localhost:5173)  
   - **Backend API** → [http://localhost:5000/api/expenses](http://localhost:5000/api/expenses)  
   - **MySQL** → `localhost:3306` (utente `root`, password `password`)


