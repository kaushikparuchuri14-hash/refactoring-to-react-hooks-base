import React from "react";
import { render } from "@testing-library/react";
import ChartContainer from "./ChartContainer";
import { DataContext } from "../../context/DataContext";

// Mock LineChart to avoid rendering Chart.js
jest.mock("./LineChart", () => () => <div>Mocked LineChart</div>);

describe("ChartContainer component", () => {
  it("should render LineChart with provided dataset", () => {
    const mockDataset = [
      { timestamp: "2020-01-01", amount: 100 },
      { timestamp: "2020-01-02", amount: 200 }
    ];

    const mockContextValue = {
      loading: false,
      error: "",
      data: mockDataset
    };

    const { getByText } = render(
      <DataContext.Provider value={mockContextValue}>
        <ChartContainer selectedLabel="Sales" />
      </DataContext.Provider>
    );

    expect(getByText("Mocked LineChart")).toBeInTheDocument();
  });
});
