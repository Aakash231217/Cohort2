const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const courseSchema = new mongoose.Schema({
    title:String,
    price:5999
});

const User = mongoose.model('User',userSchema);
const Course = mongoose.model('Course',courseSchema)

User.findById("1");
User.findOne({
    username:"aakash@gmail.com"
})
User.find({
    username:"harkirat@gmail.com"
})

User.updateOne(
    {"id":"1"},
    {$push:{purchasedCourses: courseId}}
)

User.update({},{
    premium:true
})

User.deleteMany({})

User.deleteOne({
    username:"aakash@gmail.com"
})