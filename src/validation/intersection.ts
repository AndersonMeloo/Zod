import z from "zod"

const person = z.object({

    name: z.string(),
    age: z.number()
})

const employee = z.object({

    role: z.string()
})

const employeePerson = z.intersection(person, employee)
// const employeePerson = person.and(employee)

const result = employeePerson.parse({

    name: 'Anderson',
    age: 28,
    role: 'Engineer Software'
})
console.log(result)

