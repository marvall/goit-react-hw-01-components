import React from "react";
import PropTypes from "prop-types";
import Style from "./Stat.module.scss";

function Stat({ label, percentage }) {
  return (
    <>
      <li className={Style.item}>
        <span className={Style.label}>{label}</span>
        <span className={Style.percentage}>{percentage}%</span>
      </li>
    </>
  );
}
Stat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Stat;
