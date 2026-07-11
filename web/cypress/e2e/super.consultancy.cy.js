import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de consultoria', () => {
    beforeEach(() => {
        cy.start()
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    });

    it('Deve solicitar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve solicitar consultoria in Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        const requiredFiedls = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' },
        ]

        requiredFiedls.forEach(({label, message}) => {
            cy.contains('label', label)
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', message)
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })
})

