const searchGoogleData = require("./goole-search");

const mocGoogleData = [
  "cats.com",
  "catsPictures.com",
  "frenchFries.com",
  "pepsi.com",
  "catTypes.com",
  "cuteCats.com",
  "place2p.com",
  "apollo-client.com",
  "emoji😎"
];

describe("Test searchGoogleData", () => {
  it("with exist input", () => {
    expect(searchGoogleData(mocGoogleData, "pepsi")).toEqual(["pepsi.com"]);
  });

  it("array length", () => {
    expect(searchGoogleData(mocGoogleData, "cat").length).toEqual(3);
  });

  it("with nonExist input", () => {
    expect(searchGoogleData(mocGoogleData, "blabla")).toEqual([]);
  });

  it("with undefined, null, NAN input", () => {
    expect(searchGoogleData(mocGoogleData, NaN)).toEqual([]);
    expect(searchGoogleData(mocGoogleData, undefined)).toEqual([]);
    expect(searchGoogleData(mocGoogleData, null)).toEqual([]);
  });

  it("with numbers", () => {
    expect(searchGoogleData(mocGoogleData, 2)).toEqual(["place2p.com"]);
  });

  it("with special characters", () => {
    expect(searchGoogleData(mocGoogleData, "-")).toEqual(["apollo-client.com"]);
  });

  it("with true, false", () => {
    expect(searchGoogleData(mocGoogleData, true)).toEqual([]);
    expect(searchGoogleData(mocGoogleData, false)).toEqual([]);
  });

  it("with emoji", () => {
    expect(searchGoogleData(mocGoogleData, "😎")).toEqual(["emoji😎"]);
    expect(searchGoogleData(mocGoogleData, "😇")).toEqual([]);
  });
});
