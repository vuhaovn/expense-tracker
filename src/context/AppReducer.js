export default function (state, action) {
  switch (action.type) {
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(tr => tr.id !== action.payload)
      }
    case 'ADD':
      return {

      }
    default:
      return state;
  }
}