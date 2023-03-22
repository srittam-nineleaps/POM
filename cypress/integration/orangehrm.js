import HomePage_PO from "../support/PageObject/OrangeHRM/HomePage_PO";
import Link_PO from "../support/PageObject/OrangeHRM/Link_PO";
import Logout_PO from "../support/PageObject/OrangeHRM/Logout_PO";

//<reference types="Cypress" />

describe("This is my Test Suite", () => {
  const homepage_po = new HomePage_PO();
  const logout_po = new Logout_PO();
  const link_po = new Link_PO();

  beforeEach(function () {
    // this is to create the object

    homepage_po.visitHomepage();
    homepage_po.Login();
  });
  it("This is my Test Case", () => {
    // cy.SelectName("Admin");
    link_po.link_click("Admin");
    logout_po.logout();
  });
});
