import { z } from "zod"

const pattern = z.object({

    age: z.number()
})

const patterns = z.promise(z.object({

    car: z.string().optional()
}))

const promisePattern = z.promise(pattern)

const apiResponse = Promise.resolve({

    age: 2014
})

const result = promisePattern.parse(apiResponse)
console.log(result)

