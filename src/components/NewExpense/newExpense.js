import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpnese = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpeneseDataHandler = (enteredExpenseData) => {
    const expnseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpens(expnseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpeneseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpnese;
