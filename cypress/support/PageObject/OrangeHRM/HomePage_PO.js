class HomePage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("orangeHRM_Homepage"));
    cy.wait(5000);
  }

  Login() {
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".oxd-button").click();
  }
}

export default HomePage_PO;
