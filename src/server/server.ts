import express from 'express';
import z from 'zod';
import { postsSchema } from './schemas/postsSchema';

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// server test
server.get('/ping', (req, res) => {

    res.json({ pong: true })
})

server.post('/user', (req, res) => {

    // Validation
    const userSchema = z.object({

        name: z.string().min(2),
        email: z.string().email(),
        age: z.number().min(18).max(120)
    })

    const result = userSchema.safeParse(req.body)
    if (!result.success) {
        return res.status(400).json({ error: 'Invalid data' })
    }

    const { name, email, age } = result.data

    console.log('Process...')
    console.log(name, email, age)

    res.status(201).json({ message: 'User created successfully!' })
})

server.get('/posts', async (req, res) => {

    // https://jsonplaceholder.typicode.com/

    const request = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await request.json()
    console.log(data)

    const result = postsSchema.safeParse(data)
    if (!result.success) {
        return res.status(500).json({ error: 'Internal error ' })
    }

    // Process
    let totalPosts = result.data.length

    res.json({ total: totalPosts })
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})