import Login from "../pages/login/index.js";
import Inventory from "../pages/inventory/index.js";

describe("Carrinho", () => {
  beforeEach(() => {
    // Arrange
    Login.visitarPagina();
    Login.preencherCredenciaisValidas();
  });

  it("Adicionar produto ao carrinho com sucesso", () => {
    // Act
    Inventory.AdicionarProduto();

    // Assert
    Inventory.ValidarProdutoAdicionado();
  });

  it("Remover produto do carrinho com sucesso", () => {
    // Arrange
    cy.get("body").then(($body) => {
      if ($body.find(".shopping_cart_badge").length === 0) {
        Inventory.AdicionarProduto();
      }
    });

    // Act
    Inventory.RemoverProduto();

    // Assert
    Inventory.ValidarProdutoRemovido();
  });
});
