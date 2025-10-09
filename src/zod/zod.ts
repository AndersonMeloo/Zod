import z from "zod";

const schema = z.object({

    name: z.string().min(2),
    email: z.string().email(),
    // age: z.number().min(18).max(30),
    number: z.number().min(2000).max(2019),
    status: z.boolean(),

    characteristics: z.array(

        z.object({
            name: z.string(),
            value: z.number()
        })
    )
})

type Car = z.infer<typeof schema>

let data: Car = {

    name: 'Volkswagen',
    email: "gti@mail.com",
    number: 2014,
    status: true,
    characteristics: [
        { name: "Golf GTI", value: 120000 },
        { name: 'Jetta GLI', value: 200000 }
    ]
}

// parse: Throws an error, validates the data, and stops execution on error.
try {
    const result = schema.parse(data)
    console.log('Succes', result)
} catch (err) {
    console.log('Error', err)
}

// safeParse: Object, Manually handle errors
const results = schema.safeParse(data)
if (results.success) {
    console.log(`Succes`, results.data)
} else {
    console.log(`Error`, results.data)
}
