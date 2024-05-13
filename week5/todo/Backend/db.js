const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://rktaakash:O9TRJdcilGC41Z9P@cluster1.jgshs08.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.log('MongoDB connection error:', err));

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})


const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}
