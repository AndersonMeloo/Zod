import z from "zod";

const pattern = z.object({

    name: z.string(),
    // active: z.boolean(),
    // birthData: z.date(),
    // something: z.undefined(), // It may or may not exist
    // anything: z.any()
})

try {
    const result = pattern.parse({

        name: 'Audi'
    })
    console.log('Succes', result)
} catch (err) {
    console.log('Error', err)
}

const patterns = z.object({

    age: z.number(),
    test: z.string().optional(),
    name: z.literal('GTI') // Identical value
})

const results = patterns.parse({

    age: 21,
    name: 'GLI'
})
console.log(results)
