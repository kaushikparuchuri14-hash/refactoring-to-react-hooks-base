import React from "react";
import { render } from "@testing-library/react";
import SummaryContainer from "./SummaryContainer";
import { DataContext } from "../../context/DataContext";

describe("SummaryContainer component", () => {
  it("should render sales and subscriptions totals", async () => {
    const mockContextValue = {
      loading: false,
      error: "",
      data: {
        salesTotal: 899,
        subscriptionsTotal: 344
      }
    };

    const { getByText } = render(
      <DataContext.Provider value={mockContextValue}>
        <SummaryContainer />
      </DataContext.Provider>
    );

    expect(getByText("CellFast sales")).toBeInTheDocument();
    expect(getByText("$ 899")).toBeInTheDocument();

    expect(getByText("CellNow subscriptions")).toBeInTheDocument();
    expect(getByText("$ 344")).toBeInTheDocument();
  });
});
