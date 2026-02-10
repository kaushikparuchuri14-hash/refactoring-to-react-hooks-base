describe("Polly dashboard", () => {

  it("should load the dashboard", () => {
    cy.intercept("GET", "/api/totals/", {
      statusCode: 200,
      body: {
        salesTotal: 2311,
        subscriptionsTotal: 381,
      },
    }).as("getTotals");

    cy.visit("/");

    cy.wait("@getTotals");
    cy.contains("Polly dashboard");
  });

  it("should select Sales", () => {
    cy.intercept("GET", "/api/sales/", {
      statusCode: 200,
      body: [
        {
          timestamp: "2020-06-17T06:44:02.676475",
          amount: 1902,
        },
        {
          timestamp: "2020-06-17T06:45:30.983656",
          amount: 893,
        },
      ],
    }).as("getSales");

    cy.visit("/");

    cy.get("select").select("Sales");
    cy.wait("@getSales");
  });

});
