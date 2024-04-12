const express = require("express")
const zod = require("zod")
const app = express()

const schema = zod.array(zod.number({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidneys:zod.array(zod.number())
}));

app.use(express.json());
app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const responses = schema.safeParse(kidneys);
    res.send({
        response
    })
});

app.listen(3000);