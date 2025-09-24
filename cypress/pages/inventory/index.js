import { elements as el } from "./elements.js";

class Inventory {
  ValidarProdutoAdicionado() {
    // Assert
    cy.get(el.qtdItensCarrinho).should("be.visible").and("have.text", "1");
    cy.get(el.carrinho).click();
    cy.get(el.produtoAdicionado).should("be.visible");
    cy.screenshot("Produto adicionado");
  }

  AdicionarProduto() {
    // Act - Aguarda a página carregar e clica no botão
    cy.url().should("include", "/inventory.html");
    cy.get(el.adicionarProduto).should("be.visible").click();
  }

  RemoverProduto() {
    // Act
    cy.get(el.carrinho).click();
    cy.get(el.botaoRemover).click();
  }

  ValidarProdutoRemovido() {
    // Assert
    cy.get(el.qtdItensCarrinho).should("not.exist");

    // Volta para a página de inventário para validar que o botão mudou para "Add to cart"
    cy.get('[data-test="continue-shopping"]').click();
    cy.get(el.adicionarProduto).should("be.visible");

    cy.screenshot("Produto removido");
  }

  MensagemErro() {
    // Assert
    cy.get(el.errorMessage).should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }
}

export default new Inventory();
