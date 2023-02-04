import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [adding, setAdding] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAdding(false);
  };

  const addingButtonHandler = () => {
    setAdding(true);
  };

  const stopAddingHandler = () => {
    setAdding(false);
  };

  return (
    <div className="new-expense">
      {!adding && (
        <button onClick={addingButtonHandler}>Add New Expense</button>
      )}
      {adding && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
