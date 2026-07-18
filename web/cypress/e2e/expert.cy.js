describe('Expert', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Manipular os atributos de elementos do HTML', () => {
        cy.log('toDo')

        cy.get('#email').invoke('val', 'papito@teste.com.br')

        cy.get('#password').invoke('attr', 'type', 'text')
            .type('senha123')

        cy.contains('button', 'Entrar')
            .invoke('hide')
            .should('not.be.visible')

        cy.contains('button', 'Entrar')
            .invoke('show')
            .should('be.visible')
    })
})