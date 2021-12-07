import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext)

  const resetState = () => {
    setName('');
    setAmount(0);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now() + (Math.random() * 100000),
      name,
      amount: +amount,
    }
    addTransaction(newTransaction);
    resetState();
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleAdd}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
