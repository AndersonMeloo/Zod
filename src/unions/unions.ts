import z from "zod"

const pattern = z.object({

    age: z.union([z.string(), z.number()]),
    price: z.string().or(z.number()).optional()
})

const result = pattern.parse({

    age: '2014',
    price: 120000
})
console.log(result)