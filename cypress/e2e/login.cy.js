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
    Inventory.MensagemErro();

    cy.screenshot("Login sem sucesso - credenciais inválidas");
  });
});
