import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../db.js";

const Expense = sequelize.define("Expense", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: "Altro"
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

export default Expense;
