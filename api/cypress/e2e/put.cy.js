describe('PUT /api/users/:id', () => {

    context('Atualização', () => {

        let userId

        const originalUser = {
            name: 'Peter Parker',
            email: 'peter.parker@example.com',
            password: '123456'
        }

        const updatedUser = {
            name: 'SpiderMan',
            email: 'spider.man@example.com',
            password: 'pwd123'
        }

        before(() => {
            cy.task('deleteUser', originalUser.email)
            cy.task('deleteUser', updatedUser.email)

            cy.postUser(originalUser).then((response) => {
                cy.log(response.body.user.id)
                userId = response.body.user.id
            })
        })

        it('Deve atualizar um usuário existente', () => {
            cy.putUser(userId, updatedUser).then((response) => {
                expect(response.status).to.eq(204)
            })
        })

        after(() => {
            cy.getUsers().then((response) => {
                const spider = response.body.find(user => user.id === userId)
                expect(spider).to.exist
                expect(spider.name).to.eq(updatedUser.name)
                expect(spider.email).to.eq(updatedUser.email)
            })
        })

    })

    context('Campos obrigatórios', () => {
        it('O campo name deve ser obrigatório', () => {
            const user = {
                email: 'cyclops.xmen@marvel.com',
                password: '123456'
            }

            cy.putUser(1, user).then((response) => {

            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Name is required.')
            })
        })

        it('O campo email deve ser obrigatório', () => {
            const user = {
                name: 'Jean Grey',
                password: '123456'
            }

            cy.putUser(1, user).then((response) => {

            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Email is required.')
            })
        })

        it('O campo senha deve ser obrigatório', () => {
            const user = {
                name: 'Charles Xavier',
                email: 'professorx.xmen@marvel.com'
            }

            cy.putUser(1, user).then((response) => {

            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Password is required.')
            })
        })

        it('Não deve enviar um JSON inválido', () => {
            const user = `{
      name: 'Magneto',
      email: 'magneto.xmen@marvel.com',
      password: '123456'
    }`

            cy.putUser(1, user).then((response) => {

            }).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Invalid JSON payload.')
            })

        })
    })
})