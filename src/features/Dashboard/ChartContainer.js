import React, { useContext } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import { DataContext } from "../../context/DataContext";

const ChartContainer = ({ selectedLabel }) => {
  const { data: dataset } = useContext(DataContext);

  // Ensure dataset is always an array
  const safeDataset = Array.isArray(dataset) ? dataset : [];

  const chartLabels = safeDataset.map((dataPoint) => dataPoint.timestamp);
  const chartValues = safeDataset.map((dataPoint) => dataPoint.amount);

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
  selectedLabel: PropTypes.string.isRequired,
};

export default ChartContainer;
