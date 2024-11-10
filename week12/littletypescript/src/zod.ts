import {z} from 'zod';
import express from 'express';

const app = express();

//defining schema for profile updates

const userProfileSchema = z.object({
    name:z.string().min(1),
    email:z.string().email(),
    age:z.number().min(18).optional(),
})

export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user",(req,res)=>{
    const {sucess} = userProfileSchema.safeParse(req.body);
    const ipdatedBody:FinalUserSchema = req.body;
    if(!success){
        res.status(411).json({});
        return;
    }
})

