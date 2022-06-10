import { api } from "../../../../api/testApi";

it("shoud return cars", async () => {
  const cars = await api(fetch);
  expect(cars).toBeTruthy();
  expect(cars.length).toBeGreaterThan(0);
});

it("mocking the fetch", () => {
  const mockFetch = jest.fn(() =>
    Promise.resolve({
      json: () => [
        {
          id: 1,
          model: "model",
          gearbox: "gearbox",
          fuelType: "fuelType",
          fuelConsumption: 1,
        },
      ],
    })
  );

  return api(mockFetch).then((cars) => {
    expect(cars.length).toBeGreaterThan(0);
  });
});
