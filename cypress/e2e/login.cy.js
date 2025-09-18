describe('Login', () => {

  it('Realizar login com sucesso', () => {
    
    // Arrange
    cy.login()

    // Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    
    cy.screenshot('Login')
  })

  it('Realizar login sem sucesso - credenciais inválidas', () => {
    // Arrange
    cy.loginError()

    // Assert
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    cy.screenshot('Login sem sucesso - credenciais inválidas')
  })
})