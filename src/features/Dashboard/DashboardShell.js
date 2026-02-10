import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";

const DashboardShell = ({ fetchDataset }) => {
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleSelectChange = event => {
    const selectedLabel = event.target.selectedOptions[0].label;
    setSelectedLabel(selectedLabel);
    fetchDataset(event.target.value);
  };

  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          label="Please, select a chart"
          handleChange={handleSelectChange}
          id="select-chart"
          options={optionsForSelect}
        />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
};

export default DashboardShell;
