import Navbar from "../../src/Components/Navbar";

describe("Navbar.cy.ts", () => {
  it("Should mount without crashing", () => {
    cy.cyrilmount(<Navbar />);
  });
});
