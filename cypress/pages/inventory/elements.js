export const elements = {
  qtdItensCarrinho: ".shopping_cart_badge",
  carrinho: "#shopping_cart_container",
  produtoAdicionado: ".inventory_item_name",
  botaoRemover: '[data-test="remove-sauce-labs-backpack"]',
  adicionarProduto: '[data-test="add-to-cart-sauce-labs-backpack"]',
  addToCart: (itemName) => `[data-test="add-to-cart-${transform(itemName)}"]`,
};

function transform(texto) {
  if (typeof texto !== "string") return "";
  return texto.replaceAll(" ", "-").toLowerCase();
}
