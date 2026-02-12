import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DashboardShell from "./DashboardShell";
import { DataContext } from "../../context/DataContext";

// Mock environment variable
process.env.REACT_APP_BASE_URL = "/api";

// Mock child components
jest.mock("./ChartContainer", () => () => <div>Mocked ChartContainer</div>);
jest.mock("./SummaryContainer", () => () => <div>Mocked SummaryContainer</div>);

describe("DashboardShell component", () => {
  it("should render dashboard and call updateEndpoint on select change", () => {
    const mockUpdateEndpoint = jest.fn();

    const mockContextValue = {
      data: [],
      loading: false,
      error: "",
      updateEndpoint: mockUpdateEndpoint
    };

    const { getByLabelText } = render(
      <DataContext.Provider value={mockContextValue}>
        <DashboardShell />
      </DataContext.Provider>
    );

    const select = getByLabelText(/select a chart/i);

    Object.defineProperty(select, "selectedOptions", {
      value: [{ label: "Sales" }],
      writable: false
    });

    fireEvent.change(select, {
      target: { value: "/api/sales/" }
    });

    expect(mockUpdateEndpoint).toHaveBeenCalledWith("/api/sales/");
  });
});
