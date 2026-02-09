import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DataFetching = ({ endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(json => setData(json));
  }, [endpoint]);

  return (
    <ul>
      {data.map(item => (
        <li key={item.timestamp}>
          {item.timestamp} - {item.amount}
        </li>
      ))}
    </ul>
  );
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default DataFetching;
