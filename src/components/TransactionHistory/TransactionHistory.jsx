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

        <tbody>
          {items.map((item, index) => (
            <Transaction
              key={item.id}
              id={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              count={index % 2}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
TransactionHistory.defaultProps = {
  items: [],
};
TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
export default TransactionHistory;
