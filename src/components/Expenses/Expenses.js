import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterData, setFilterData] = useState("2021");

  const changeFilterHandler = (chosenFilter) => {
    setFilterData(chosenFilter);
  };

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear() === parseInt(filterData);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        filteredYear={filterData}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteExpense={props.onDeleteExpense}
      />
    </Card>
  );
};

export default Expenses;
