function greet(firstName:string){
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