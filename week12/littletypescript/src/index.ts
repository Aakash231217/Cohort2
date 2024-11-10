interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;

}

{/*function sumOfAge(user1:User, user2:User){
    return user1.age+user2.age;
}

const age=sumOfAge({name:"Aakash",age:21},{name:'Jiro', age:30});
console.log(age);*/}
 
{/*interface UpdateProps{
    name:string;
    age:number;
    password:string;
}*/}// raw method

type UpdateProps = Pick<User,'name'|'age'|'email'>

type UpdatePropsOptional=Partial<UpdateProps>;

function updateUser(updatedProps:UpdatePropsOptional){
  

}

updateUser({
    name:"aakash",
})


const user={
    name:'aakash',
    age:23,
}

user.name="singh";
console.log(user.name);

const a=[1,3,4,2,4];
a[0]=6;

const username="harkirat";
//username="singh";

//readonly

type Users={
   readonly name:string;
   readonly age:number;
}
const user1:Readonly<Users>={
    name:'John',
    age:21,
}

type userNames={
    id:string,
    username:string,
}
type userNaMes={
    [key:string]:userNames;
}

const usernamess:userNaMes={
    "aakash":{
        id:'1',
        username:'aakash',
    },
    "asjdfhen":{
        id:'2',
        username:'raman',
    }
}


//records and maps
type Users12 = Record<string,{age:number; name:string}>

const users:Users12={
    "rwsd":{age:32,name:"aakash"},
    "asdfjfd":{age:33, name:"harkirat"}
}

//exclude
type EventType = 'click'|'scroll'|'mousemove';
type ExcludeEvent = Exclude<EventType,'scroll'>;

const handleEvent = (event:ExcludeEvent)=>{
    console.log(`Handling event ${event}`);
}
handleEvent('click');