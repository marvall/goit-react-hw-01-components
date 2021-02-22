import React from "react";
import Stat from "./Stat";
import PropTypes from "prop-types";
import Style from "./Statistics.module.scss";

function Statistics({ stats, title }) {
  function collection(arr) {
    return arr.map((item) => {
      if (item === "NOT DATA") {
        return <Stat label={item} />;
      }
      return (
        <Stat key={item.id} label={item.label} percentage={item.percentage} />
      );
    });
  }
  return (
    <section className={Style.statistics}>
      <h2 className={Style.title}>{title ? title.toUpperCase() : title}</h2>

      <ul className={Style.statList}>{collection(stats)}</ul>
    </section>
  );
}
Statistics.defaultProps = {
  stats: ["NOT DATA"],
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
