describe('Formulário de consultoria', () => {
    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    });

    it('Deve solicitar consultoria individual', () => {
        // cy.get('#name').type('Richard Soares')
        cy.get('input[placeholder="Digite seu nome completo"]').type('Richard Soares')
        // cy.get('#email').type('email_richard@gmail.com')
        cy.get('input[placeholder="Digite seu email"]').type('email_richard@gmail.com')
        // cy.get('#phone').type('19992320102')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('19999991000')
            .should('have.value', '(19) 99999-1000')

        //cy.get('#consultancyType').select('Individual')
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        //span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        // cy.get('#document').type('00000000000')

        // cy.get('input[placeholder="000.000.000-00"]')
        //     .type('00000000000')
        //     .should('have.value', '000.000.000-00')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('65602530070')
            .should('have.value', '656.025.300-70')

        const discoveryChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]

        discoveryChannels.forEach((channel) => {
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]') // fazendo upload de arquivo
            .selectFile('./cypress/fixtures/document.pdf', { force: true }) //caminho relativo e o force serve pq o botão está hidden

        // cy.get('#details').type('teste')
        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type("Integer vehicula gravida justo, vitae laoreet erat auctor sed. Maecenas sed dictum sem. Etiam nec sodales tortor, sit amet vehicula augue.")

        const techs = [
            'Cypress',
            'Selenium',
            'WebDriverIO',
            'Robot Framework'
        ]
        techs.forEach((tech) => {
            // cy.get('#technologies').type('Cypress').click()
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')
        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()


        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

        // cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
        //     .should('be.visible')
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.contains('button', 'Enviar formulário')
            .click()

        cy.contains('label', 'Nome Completo')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'Email')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')

        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
    })
})

