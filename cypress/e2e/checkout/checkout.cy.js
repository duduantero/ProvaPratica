describe('Checkout',()=>{
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
  });
    it('Iniciar processo de checkout', () => {
        cy.get('.shopping_cart_link').click();

    });
    it('Preencher dados obrigatórios', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('.btn_action').click();
        cy.get('[data-test="firstName"]').type('Nome')
        cy.get('[data-test="lastName"]').type('Sobrenome')
        cy.get('[data-test="postalCode"]').type('7000000')
        cy.get('.btn_primary').click();
        
    });

    //Validar resumo da compra

    //Finalizar compra e validar mensagem de sucesso
    it('Finalizar compra e validar mensagem de sucesso', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('.btn_action').click();
        cy.get('[data-test="firstName"]').type('Nome')
        cy.get('[data-test="lastName"]').type('Sobrenome')
        cy.get('[data-test="postalCode"]').type('7000000')
        cy.get('.btn_primary').click();
        cy.get('.btn_action').click()
        cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
})