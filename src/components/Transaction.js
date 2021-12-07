import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';
  const status = transaction.amount < 0 ? 'minus' : 'plus';
  return (
    <>
      <li className={status}>
        {transaction.name} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
    </>
  )
}
