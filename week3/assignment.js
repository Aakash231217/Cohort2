//if this in array of string with atleast 1 input, return true else return false

const zod = require("zod")
function validateInput(arr){
const schema = zod.ZodArray(zod.number());
const response = schema.safeParse(arr);
console.log(response);
}

validateInput(["1",2,3])

const schema = zod.objectUtil({
    email:zod.string().email(),
    password:z.string().min(8),
})