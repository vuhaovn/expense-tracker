import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)
  const income = transactions.reduce((acc, cur) => {
    return acc + (cur.amount > 0 ? cur.amount : 0)
  }, 0)
  const expense = transactions.reduce((acc, cur) => {
    return acc + (cur.amount < 0 ? cur.amount : 0)
  }, 0)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  )
}
