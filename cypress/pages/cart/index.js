class Cart {
    validarProdutoPresenteNoCarrinho(productName) {
        cy.contains(productName).should('be.visible');

        cy.screenshot('Produto no carrinho');
    }

}

export default new Cart();