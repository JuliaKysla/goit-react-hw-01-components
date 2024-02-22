import styles from './TransactionHistory.module.css'

const TransactionHistoryItem = ({id, amount, type, currency}) =>{
    return(
        <tr key={id} className = {styles.list}>
            <td className = {styles.item}>{type}</td>
            <td className = {styles.item}>{amount}</td>
            <td className = {styles.item}>{currency}</td>
    </tr>)
}

export const TransactionHistory = ({items}) => {
    return(
<table className={styles.transactionHistory}>
  <thead className={styles.table}> 
    <tr className={styles.tabTitle}>
      <th className={styles.titleItem}>Type</th>
      <th className={styles.titleItem}>Amount</th>
      <th className={styles.titleItem}>Currency</th>
    </tr>
  </thead>

  <tbody className={styles.transactionTable}>
    {items.map(item => {
        return(
            <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        )
    })}
  </tbody>
</table>
    )
}

export default TransactionHistory;