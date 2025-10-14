import { email, z } from "zod";

const pattern = z.object({

    email: z.string().email('Email inválido').optional(),
    age: z.number({
        required_error: 'Idade é obrigatória',
        invalid_type_error: 'Idade deve ser um número'
    }).gte(18, 'Precisa ser maior de idade')
})

const result = pattern.parse({

    age: 22,
    email: 'anderson@hotmail.com'
})
console.log(result)

// const fuelOptions = ['gasolina', 'alcool', 'diesel', 'flex', 'eletrico']
const patterns = z.object({

    fuel: z.enum([
        'Gasoline',
        'Alcohol',
        'Diesel',
    ])
})

const results = patterns.parse({

    fuel: 'Diesel'
})
console.log(results)