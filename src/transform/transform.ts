import z from "zod";

const pattern = z.object({

    email: z.string().email().transform((value) => {
        return value.split('@')[1]
    }),

    emailOne: z.string().email().transform((val) => val.split('@')[1]).optional(),

    car: z.string().transform((value) => value.length),
    brand: z.string().transform((value) => value.toUpperCase()),
    age: z.string().toLowerCase().optional()
})

const result = pattern.parse({

    email: 'anderson@gmail.com',
    car: 'GTI',
    brand: 'volkswagen'
})
console.log(result)