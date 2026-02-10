import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../../hooks/useFetch";
import Loading from "./Loading";

const DataFetching = ({ endpoint }) => {
  const { loading, error, data } = useFetch(endpoint);

  const buildUI = () => {
    if (loading) return <Loading />;
    if (error) return <p>Oops! Something went wrong: {error}</p>;

    return (
      <ul>
        {data.map(element => (
          <li key={element.timestamp}>
            {element.timestamp} - {element.amount}
          </li>
        ))}
      </ul>
    );
  };

  return buildUI();
};

DataFetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default DataFetching;
