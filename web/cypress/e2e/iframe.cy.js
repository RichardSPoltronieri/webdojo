describe('iFrame', () => {
    it('Deve poder dar play no vídeo', () => {
        cy.start()
        cy.login()
        cy.contains('Video').click()

        cy.wait(3000) //esperando 3 segundos para carregar o iframe

        cy.get('iframe[title="Video Player"]') //obtendo a tag HTML com o title
            .should('exist') //verificando se existe
            .its('0.contentDocument.body') //pegando o conteúdo do iframe
            .then(cy.wrap) //recuperando a informação e transformando em objeto cypress
            .as('iFramePlayer') //gravando dentro de um alias, para chamar em outra função

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')    
    })
})