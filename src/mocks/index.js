import { createServer } from "miragejs";

export let sales;
export let subscriptions;

if (process.env.NODE_ENV === "development") {
  /* ONLY FOR DEVELOPMENT! NOT FOR PRODUCTION */
  const Series = require("time-series-data-generator");

  const from = "2020-01-01T16:30:41Z";
  const until = "2020-05-01T18:30:00Z";
  const interval = 43200;
  const keyName = "amount";

  const salesSeries = new Series({ from, until, interval, keyName });
  sales = salesSeries.gaussian({
    mean: 360,
    variance: 10,
    decimalDigits: 0
  });

  const subscriptionsSeries = new Series({
    from,
    until,
    interval,
    keyName
  });
  subscriptions = subscriptionsSeries.gaussian({
    mean: 9,
    variance: 5,
    decimalDigits: 0
  });
}

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/totals", () => {
        const salesTotal = sales
          ? sales.reduce((sum, item) => sum + item.amount, 0)
          : 0;

        const subscriptionsTotal = subscriptions
          ? subscriptions.reduce((sum, item) => sum + item.amount, 0)
          : 0;

        return {
          salesTotal,
          subscriptionsTotal
        };
      });

      this.get("/sales", () => {
        return sales || [];
      });

      this.get("/subscriptions", () => {
        return subscriptions || [];
      });
    }
  });
}