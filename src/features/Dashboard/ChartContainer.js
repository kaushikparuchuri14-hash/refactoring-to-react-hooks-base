import React, { useContext } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import { globalContext } from "../../App";

const ChartContainer = ({ selectedLabel }) => {
  const { data } = useContext(globalContext);

  const chartLabels = data.map(dataPoint => dataPoint.timestamp);
  const chartValues = data.map(dataPoint => dataPoint.amount);

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
};

export default ChartContainer;
