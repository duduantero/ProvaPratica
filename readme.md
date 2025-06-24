
# Prova Prática de Automação Web – Teste de Software

Repositório destinado à Prova Prática de Automação Web da disciplina de Teste de Software do curso de Engenharia de Software da Universidade Católica de Brasília.

Foram desenvolvidos e documentados casos de teste para os principais casos de uso e funcionalidades da aplicação [saucedemo](https://www.saucedemo.com/v1/).

## Cenários de Teste

1. **Login e Logout**  
   - Validar login com usuário e senha corretos  
   - Validar comportamento com usuário e/ou senha incorretos  
   - Realizar logout após login bem-sucedido  

2. **Produtos**  
   - Validar a exibição da lista de produtos após o login  
   - Visualizar detalhes de um produto  
   - Ordenar produtos (por nome, preço, etc.)  

3. **Carrinho**  
   - Adicionar produtos ao carrinho  
   - Remover produtos do carrinho  
   - Validar se os itens adicionados estão corretos  

4. **Checkout**  
   - Iniciar o processo de checkout  
   - Preencher dados obrigatórios (nome, sobrenome, CEP)  
   - Validar o resumo da compra  
   - Finalizar a compra e validar a mensagem de sucesso  

## Estrutura do Repositório

- **Login e Logout** (`auth/`)  
  - `login.cy.js` (CT001 – Login)  
  - `logout.cy.js` (CT002 – Logout)  

- **Produtos** (`products/`)  
  - `product_list.cy.js` (CT003 – Exibição da lista de produtos)  
  - `product_details.cy.js` (CT004 – Visualizar detalhes de um produto)  
  - `product_sort.cy.js` (CT005 – Visualizar produtos ordenados)  

- **Carrinho** (`cart/`)  
  - `cart_add.cy.js` (CT006/CT008 – Adicionar produtos ao carrinho e validar itens)  
  - `cart_remove.cy.js` (CT007 – Remover produtos do carrinho)  

- **Checkout** (`checkout/`)  
  - `checkout.cy.js` (CT009 – Processo de Checkout)  

## Ferramentas Utilizadas

Os testes foram implementados utilizando o framework [Cypress](https://www.cypress.io/), que permite a automação de testes end-to-end em aplicações web de forma eficiente e intuitiva.