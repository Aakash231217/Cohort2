interface User{
    name:string;
    age:number;
}

function sumOfAge(user1:User, user2:User){
    return user1.age+user2.age;
}

const age=sumOfAge({name:"Aakash",age:21},{name:'Jiro', age:30});
console.log(age);