import Login from "../pages/login/index.js";
import Carrinho from "../pages/inventory/index.js";
import Header from "../pages/header/index.js";
import Cart from "../pages/cart/index.js";

describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
    Login.preencherCredenciaisValidas();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    const qtdItensAdicionados = 1;
    Carrinho.adicionarProduto("Sauce Labs Backpack");

    // Assert
    Header.validarCarrinhoPossuiItens(qtdItensAdicionados);
    Header.navegarParaCarrinho();
    Cart.validarProdutoPresenteNoCarrinho("Sauce Labs Backpack");
  });

  it("Remover produto do carrinho com sucesso", () => {
    // Arrange
    cy.get("body").then(($body) => {
      if ($body.find(".shopping_cart_badge").length === 0) {
        Carrinho.adicionarProduto("Sauce Labs Backpack");
      }
    });

    // Act
    Carrinho.removerProduto();

    // Assert
    Carrinho.validarProdutoRemovido();
  });
});
