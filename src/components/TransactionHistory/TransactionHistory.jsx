import css from '../TransactionHistory/TransactionHistory.module.css';
const TransactionHistory = ({ transactions }) => (
  <table class={css.tableContainer}>
    <thead>
      <tr className={css.tableHeader}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(transaction => (
        <tr className={css.line} key={transaction.id}>
          <td className={css.type}>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
