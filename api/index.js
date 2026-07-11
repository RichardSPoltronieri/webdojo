const express = require('express')
const cors = require('cors')
const prisma = require('./prisma')
require('dotenv').config()

console.log(process.env.DATABASE_URL)

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'API do curso Ninja do Cypress'
    })
})

app.post('/api/users/register', async (req, res) => {

    const { name, email, password } = req.body

    if (!name) {
        return res.status(400).json({
            error: 'Name is required!'
        })
    }

    if (!email) {
        return res.status(400).json({
            error: 'Email is required!'
        })
    }

    if (!password) {
        return res.status(400).json({
            error: 'Password is required!'
        })
    }

    try {

        const userExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userExists) {
            return res.status(409).json({
                error: 'Email already exists'
            })
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return res.status(201).json({
            message: 'Usuário registrado com sucesso!',
            user
        })

    } catch (error) {
    console.error(error)

    return res.status(500).json({
        message: error.message,
        error
    })
}

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})