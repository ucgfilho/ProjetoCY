import Login from "../pages/login/index.js";
import Inventory from "../pages/inventory/index.js";

describe("Login", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
  });

  it("Realizar login com sucesso", () => {
    // Act
    Login.preencherCredenciaisValidas();

    // Assert
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");

    cy.screenshot("Login");
  });

  it("Realizar login sem sucesso - credenciais inválidas", () => {
    // Act
    Login.preencherCredenciaisInvalidas();

    // Assert
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );

    cy.screenshot("Login sem sucesso - credenciais inválidas");
  });
});
