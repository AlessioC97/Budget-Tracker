Applicazione fullstack per tracciare le spese personali.  
Progetto sviluppato con React, Node.js + Express e MySQL, completamente eseguibile tramite Docker Compose.

---

Struttura progetto:
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

Avvio con Docker
1. Avere installati:
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
   - Frontend: [http://localhost:5173](http://localhost:5173)  
   - Backend API: [http://localhost:5000/api/expenses](http://localhost:5000/api/expenses)  
   - MySQL: `localhost:3306` (utente `root`, password `password`)
