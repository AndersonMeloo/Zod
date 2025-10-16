import z from "zod";

const pattern = z.object({

    car: z.string(),
    year: z.number(),
    volks: z.string().array(), // = string[]
    bmw: z.array(z.string()).optional()
})

const result = pattern.parse({

    car: 'GLI',
    year: 2025,
    volks: ['GTI', 'TSI', 'GTS'],
    bmw: ['M2', '320i', 'X6']
})
console.log(result)