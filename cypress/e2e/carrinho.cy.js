describe('Carrinho', () => {

  beforeEach(() => {
    // Arrange
    cy.login()
  })

  it('Adicionar produto ao carrinho com sucesso', () => {
    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Assert
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

    cy.get('#shopping_cart_container').click()

    cy.contains('Sauce Labs Backpack').should('be.visible')

    cy.screenshot('Produto adicionado')
  })

  it('Remover produto do carrinho com sucesso', () => {
    // Arrange
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')

    // Act
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // Assert
    cy.get('.shopping_cart_badge')
      .should('not.exist')

    cy.screenshot('Produto removido')
  })
})