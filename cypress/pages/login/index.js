import { elements as el } from "./elements.js";

class Login {
  visitarPagina() {
    cy.visit("https://www.saucedemo.com/");
  }

  preencherCredenciaisValidas() {
    cy.get(el.username).type("standard_user");
    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
  }

  preencherCredenciaisInvalidas() {
    cy.get(el.username).type("user.invalido");
    cy.get(el.password).type("senha.invalida");
    cy.get(el.loginButton).click();
  }

  MensagemErro() {
    // Assert
    cy.get(el.errorMessage).should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }
}

export default new Login();
