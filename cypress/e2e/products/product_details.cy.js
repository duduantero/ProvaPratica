
describe('Visualizar detalhes de um produto', () => {
  beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
  });
  it('Cada produto na lista deve conter imagem, nome, descrição e preço', () => {
    cy.get('.inventory_item').first().as('primeiroProduto');
    cy.get('@primeiroProduto').find('.inventory_item_img').should('be.visible');
    cy.get('@primeiroProduto').find('.inventory_item_name').should('not.be.empty');
    cy.get('@primeiroProduto').find('.inventory_item_desc').should('not.be.empty');
    cy.get('@primeiroProduto').find('.inventory_item_price').should('not.be.empty');
    cy.get('@primeiroProduto').find('button.btn_inventory').should('be.visible');
  });
});