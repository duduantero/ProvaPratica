describe('Visualizar produtos ordenados', () => {
  beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
  });

  it('Filtrar produtos por nome A-Z', () => {
    cy.get('.product_sort_container').select('az)');
  });
  it('Filtrar produtos por nome Z-A', () => {
    cy.get('.product_sort_container').select('za');
  });
  it('Filtrar produtos por preço menor', () => {
    cy.get('.product_sort_container').select('lohi');
  });
  it('Filtrar produtos por preço maior', () => {
    cy.get('.product_sort_container').select('hilo');
  });
});