describe('Studio', () => {
    /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').type('katana123');
    cy.contains('button', 'Entrar').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    cy.get('[data-cy="user-name"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})