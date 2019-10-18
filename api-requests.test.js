const fetch = require("node-fetch");
const { getPeoplePromise, getPeople } = require("./api-requests");

describe("Test api call", () => {
  it("getPeople count", () => {
    expect.assertions(2);
    return getPeople(fetch).then(res => {
      expect(res).toHaveProperty("count");
      expect(res.count).toEqual(87);
    });
  });

  it("getPeople count", () => {
    expect.assertions(4);
    return getPeoplePromise(fetch).then(res => {
      expect(res).toHaveProperty("count");
      expect(res).toHaveProperty("results");
      expect(res.count).toEqual(87);
      expect(res.results.length).toBeGreaterThan(9);
    });
  });
});
