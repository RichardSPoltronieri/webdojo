describe('GET /api/users', () => {

    const heroes = [
        {
            name: 'Wolverine',
            email: 'logan.xmen@marvel.com',
            password: '123456'
        },
        {
            name: 'Bruce Banner',
            email: 'bruce.banner@marvel.com',
            password: '123456'
        },
        {
            name: 'Diana Prince',
            email: 'diana.prince@dc.com',
            password: '123456'
        },
        {
            name: 'Clark Kent',
            email: 'clark.kent@dc.com',
            password: '123456'
        },
        {
            name: 'Arthur Curry',
            email: 'arthur.curry@dc.com',
            password: '123456'
        }
    ]

    before(() => {
        heroes.forEach((hero) => {
            cy.postUser(hero)
        })
    }
    )
    it('Deve listar todos os usuários', () => {

        cy.getUsers().then((response) => {
            expect(response.status).to.eq(200)

            heroes.forEach((hero) => {
                const found = response.body.find((user) => user.email === hero.email)
                expect(found.name).to.eq(hero.name)
                expect(found.email).to.eq(hero.email)
                expect(found).to.have.property('id')
            })

        })
    })
})