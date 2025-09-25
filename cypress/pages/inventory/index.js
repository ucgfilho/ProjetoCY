import { elements as el } from "./elements.js";

class Carrinho {
  validarAcessoAPagina() {
    // Assert
    cy.url().should("eq", "www.saucedemo.com/cart.html");

    cy.screenshot("Página do carrinho");
  }

  adicionarProduto(itemName) {
    // Act
    cy.get(el.addToCart(itemName)).click();
  }

  removerProduto() {
    // Act
    cy.get(el.carrinho).click();
    cy.get(el.botaoRemover).click();
  }

  validarProdutoAdicionado(quantidadeAnterior = 0) {
    // Assert
    cy.get(el.qtdItensCarrinho)
      .should("be.visible")
      .invoke("text")
      .then((quantidadeAtual) => {
        expect(parseInt(quantidadeAtual)).to.be.greaterThan(quantidadeAnterior);
      });

    cy.get(el.carrinho).click();
    cy.get(el.produtoAdicionado).should("be.visible");

    cy.screenshot("Produto adicionado");
  }

  validarProdutoRemovido() {
    // Assert
    cy.get(el.qtdItensCarrinho).should("not.exist");
    cy.get('[data-test="continue-shopping"]').click();
    cy.get(el.adicionarProduto).should("be.visible");

    cy.screenshot("Produto removido");
  }
}

export default new Carrinho();
