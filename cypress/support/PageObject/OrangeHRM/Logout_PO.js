class Logout_PO {
  logout() {
    cy.get(".oxd-userdropdown-tab .oxd-userdropdown-icon").click();
    cy.get(".oxd-userdropdown-tab .oxd-icon").click();
    cy.get(":nth-chld(4) > .oxd-userdropdown-link").click();
  }
}
export default Logout_PO;
