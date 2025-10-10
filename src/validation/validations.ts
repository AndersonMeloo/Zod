import z from "zod";
import { ru } from "zod/locales";

// Validations, Transformations
const pattern = z.object({

    name: z.string().toUpperCase(),
    email: z.string().email().toLowerCase(),
    description: z.string().trim()
})

const result = pattern.parse({

    name: 'Golf GTI',
    email: 'GOLFGTI@hotmail.com',
    description: '   230 Cavalos'
})
console.log(result)


// Validations
const cars = z.object({

    car: z.string().min(2).max(20),
    character: z.string().length(5),
    url: z.string().url(),
    emoji: z.string().email().optional(),
    id: z.string().uuid(),
    rule: z.string().includes('wp_'),
    ruleOne: z.string().startsWith('wp_').optional(), // Inicia com
    image: z.string().endsWith('.jpg').optional(), // Termina com
    test: z.string().startsWith('Golf').endsWith('GTI').optional()  
})

const resultsCar = cars.parse({

    car: 'Jetta GLI',
    character: '250cv',
    url: 'https://quatrorodas.abril.com.br/testes/ja-testamos-o-volkswagen-golf-gti-que-retornara-ao-brasil-em-2026/',
    id: '1b671a64-40d5-491e-99b0-da01ff1f3341',
    rule: 'wp_gti'
})
console.log(resultsCar)
