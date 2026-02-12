import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Loading from "../../common/components/Loading";

const SummaryContainer = () => {
  const { loading, error, data } = useContext(DataContext);

  if (loading) return <Loading />;
  if (error) return <p>Something went wrong: {error}</p>;

  const { salesTotal, subscriptionsTotal } = data || {};

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default SummaryContainer;

