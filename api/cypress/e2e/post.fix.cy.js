describe('POST /api/users/register', () => {
  it('Deve cadastrar um novo usuário', () => {

    const user = {
      name: 'Wolverine',
      email: 'logan.xmen@marvel.com',
      password: '123456'
    }

    cy.task('deleteUser', user.email)

    cy.post(user).then((response) => {

      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('User registered successfully.')
      expect(response.body.user.name).to.eq(user.name)
      expect(response.body.user.email).to.eq(user.email)

      cy.log(JSON.stringify(response.body))
    })
  })

  it('Não deve cadastrar com email duplicado', () => {

    const user = {
      name: 'Cyclops',
      email: 'cyclops.xmen@marvel.com',
      password: '123456'
    }

    cy.task('deleteUser', user.email)

    cy.post(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    cy.post(user).then((response) => {

      expect(response.status).to.eq(409)
      expect(response.body.error).to.eq('Email already exists.')
    })
  })

  it('O campo name deve ser obrigatório', () => {
    const user = {
      email: 'cyclops.xmen@marvel.com',
      password: '123456'
    }

    cy.post(user).then((response) => {

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

    cy.post(user).then((response) => {

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

    cy.post(user).then((response) => {

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

    cy.post(user).then((response) => {

    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Invalid JSON payload.')
    })
    //   })


  })

  Cypress.Commands.add('post', (user) => {
    return cy.api({
      method: 'POST',
      url: 'http://localhost:3333/api/users/register',
      body: user,
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    })
  })
})
