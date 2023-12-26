import React from "react";
import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate=new Date(2021,12,5)
    const expenseTitle='Car Insurance'
    const expenseLocation='Delhi'
    const expensePrice=180.23
    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item_description">
                <h2>{expenseTitle}</h2>
                <div>{expenseLocation}</div>
                <div className="expense-item_price">{expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;