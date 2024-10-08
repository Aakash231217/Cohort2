{/*function greet(firstName:string){
    console.log("Hello"+firstName);
}

greet("Aakash");


function sum(a:number,b:number){
    return a+b;
}
const value = sum(8,6);
console.log(value);

function isLegal(age:number):boolean{
   if(age>18){
    return true;
   }
   else{
    return false;
   }
}
let x = isLegal(18);




function runAfter1s(fn:()=>void){
    setTimeout(fn,1000);
}

runAfter1s(function(){
    console.log("Hi there");                                                                                                                                                                                                                                                                                                                        
})

*/}

interface User{
    firstName:string;
    lastName:string;
    age:number;
    email?:string;
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}

function greet(user:User){
    console.log("hi there"+user.firstName);
}

isLegal({
    firstName:"aakash",
    lastName:"singh",
    age:20,
})


type User2 = {
    firstName:string;
    lastName:string;
    age:number;
}

type Employee = {
    name:string;
    startDate:Date;
}

interface Manager{
    name:string;
    department:string;
}

type TechLead = Employee & Manager;

const t:TechLead={
    name:"Aakash",
    department:"IT",
    startDate:new Date(),
    
}

function maxValue(arr:number[]){
    let max = 0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(maxValue([1,2,3,45,3]));


type keyInput = "up"|"down"|"left"|"right";

enum Direction{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right",
}
//
function doSomething(keyPressed:Direction){
    if(keyPressed==Direction.Up){

    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
doSomething(Direction.Left);
doSomething(Direction.Right);


const app = express();
enum ResponseStatus{
    Success=200,
    NotFound = 404,
    Error = 500
}

app.get("/",(req,res)=>{
    if(!req.query.userId){
        res.status(ResponseStatus.NotFound);
    }
    res.json({});
})


//generics
 type Input = number | string;

 function firstEle(arr:string[]|number[]){
    return arr[0];
 }

 const value = firstEle([1,13,4,45,3])