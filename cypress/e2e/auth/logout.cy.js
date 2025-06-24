describe('Logout',()=>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
  });
    it('Encerrando sessão',()=>{
        cy.get('.bm-burger-button > button').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('include', 'https://www.saucedemo.com/v1/')
    })
})