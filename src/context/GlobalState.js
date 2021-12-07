import React, { useState, createContext, useReducer } from "react";
export const HeroContext = createContext();

export const HeroProvider = (props) => {
  const [hero, setHero] = useState([
    { name: 'Superman' },
    { name: 'Batman' },
    { name: 'The Flash' },
  ])

  return (
    <HeroContext.Provider value={[hero, setHero]}>
      {props.children}
    </HeroContext.Provider>
  )
}

const initState = {
  transactions: [
    { id: 1, name: 'Flower', amount: -20 },
    { id: 2, name: 'Salara', amount: 300 },
    { id: 3, name: 'Book', amount: -10 },
    { id: 4, name: 'Camera', amount: 150 },
  ]
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(tr => tr.id !== action.payload)
      }
    case 'ADD':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}

export const GlobalContext = createContext(initState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE',
      payload: id,
    })
  }
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}