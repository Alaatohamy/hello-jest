const fetch = require("node-fetch");
const { getPeoplePromise, getPeople } = require("./api-requests");

const mockFetch = jest.fn().mockReturnValue(
  Promise.resolve({
    json: () =>
      Promise.resolve({
        count: 87
      })
  })
);

describe("Test api call", () => {
  it("getPeople count", () => {
    expect.assertions(2);
    return getPeople(fetch).then(res => {
      expect(res).toHaveProperty("count");
      expect(res.count).toEqual(87);
    });
  });

  it("getPeoplePromise", () => {
    expect.assertions(4);
    return getPeoplePromise(fetch).then(res => {
      expect(res).toHaveProperty("count");
      expect(res).toHaveProperty("results");
      expect(res.count).toEqual(87);
      expect(res.results.length).toBeGreaterThan(9);
    });
  });

  it("getPeople with mock fetch", () => {
    expect.assertions(4);
    return getPeople(mockFetch).then(res => {
      expect(res).toHaveProperty("count");
      expect(res.count).toEqual(87);
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith("https://swapi.co/api/people");
    });
  });
});
