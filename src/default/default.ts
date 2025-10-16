import z from "zod";

const pattern = z.object({

    car: z.string(),
    model: z.string().optional(),
    year: z.number().default(2014),
    age: z.number().default(() => Math.floor(Math.random() * 18)) // 0 até 17

})

const result = pattern.parse({

    car: 'Golf',
    model: 'GTI',
    // year: 2016
})
console.log(result)