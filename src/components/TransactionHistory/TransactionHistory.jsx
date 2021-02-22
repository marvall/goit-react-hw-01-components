import React from "react";
import Transaction from "./Transaction";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  transactionHistory: {},
  head: {
    backgroundColor: "#6795f1",
    color: "#FFFFFF",
  },
  colum: {
    fontFamily: "Roboto",
    width: 200,
    padding: 10,
  },
});

function TransactionHistory({ items }) {
  const classes = useStyles();
  function collection(data) {
    return data.map((item, index) => {
      return (
        <Transaction
          key={item.id}
          id={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          count={index % 2}
        />
      );
    });
  }
  return (
    <>
      <table className={classes.transactionHistory}>
        <thead className={classes.head}>
          <tr>
            <th className={classes.colum}>Type</th>
            <th className={classes.colum}>Amount</th>
            <th className={classes.colum}>Currency</th>
          </tr>
        </thead>

        <tbody>{collection(items)}</tbody>
      </table>
    </>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
export default TransactionHistory;
