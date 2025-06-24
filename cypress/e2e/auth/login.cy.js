describe('Login',()=>{
    it('Dever fazer login',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
    })
    it('Usuário inválido',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('h3').contains('Username and password do not match any user in this service')
    })
        it('Senha inválido',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret');
        cy.get('#login-button').click();
        cy.get('h3').contains('Username and password do not match any user in this service')
    })
        it('Campo username em branco',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('h3').contains('Username is required')
    })
        it('Campo password em branco',()=>{
        cy.visit('https://www.saucedemo.com/v1/');
        cy.get('#user-name').type('standard_user');
        cy.get('#login-button').click();
        cy.get('h3').contains('Password is required')
    })
    
})    
