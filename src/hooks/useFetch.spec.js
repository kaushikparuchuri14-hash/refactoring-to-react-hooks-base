import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";

describe("useFetch hook", () => {
  it("should GET data successfully", async () => {
    const expected = { salesTotal: 899, subscriptionsTotal: 344 };

    jest.spyOn(window, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(expected),
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/totals/"),
    );

    // Initial state
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe("");

    // Wait for state update
    await waitForNextUpdate();

    expect(result.current.data).toEqual(expected);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("");

    window.fetch.mockRestore();
  });
  it("should handle API errors", async () => {
    jest.spyOn(window, "fetch").mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: "500 Server Error",
      }),
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("/api/totals/"),
    );

    // Initial state
    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe("");

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("500 Server Error");

    window.fetch.mockRestore();
  });
});
