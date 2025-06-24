describe('Exibição da lista de produtos', () => {
  beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
  });


it('Deve exibir a lista de produtos corretamente', () => {
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length.gt', 0);
  });
});