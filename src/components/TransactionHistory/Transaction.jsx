import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  trItem: {
    fontFamily: "Roboto",
    fontWeight: 500,
    textAlign: "center",
    padding: 3,
    backgroundColor: (count) => (count ? "#e4ebfa" : "#e4E9E3"),
  },
});

function Transaction({ id, type, amount, currency, count }) {
  const classes = useStyles(count);
  return (
    <>
      <tr className={classes.trRow} id={id}>
        <td className={classes.trItem}>{type}</td>
        <td className={classes.trItem}>{amount}</td>
        <td className={classes.trItem}>{currency}</td>
      </tr>
    </>
  );
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  count: PropTypes.number,
};

export default Transaction;
