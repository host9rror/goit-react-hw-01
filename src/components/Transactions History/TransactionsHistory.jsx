import css from "./TransactionsHistory.module.css";

const TransactionHistory = ({ items }) => {
    
    return (
        <table className={css.transactionTable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                {items.map((transaction) => (
                   <tr key={transaction.id}>
                   <td>{transaction.type}</td>
                   <td>{transaction.amount}</td>
                   <td>{transaction.currency}</td>
               </tr> 
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
