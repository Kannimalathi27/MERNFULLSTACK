//Variables and Types:
let userAge = 22
const userName = "Malathi"
console.log(userAge)
console.log(userName)

//Operations:
let num1 = 10
let num2 = 5
console.log(num1+num2)   
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

//Data Types:

let num = 5
let name1 = "Malathi"
let no = true
const arr = [12,"Karthi"]
console.log(num)
console.log(no)
console.log(arr)
console.log(name1)

//function

function greetUser(name) 
{
    return `Hello ${name}`;
}

console.log(greetUser("Malathi"))     //Call the function

//if...else

let temp = 1
if(temp<30)
{
	console.log("True")
}
else
{
	console.log("False")
}

//for loop

for(let i=1;i<5;i++)
{ 
console.log(i)
}

//loose equality 

let a = 10
let b = "10"
if (a==b)
{
    console.log("loose equality")
}
else
{
    console.log("strict equality")
}
 
//strict equality

let x = 10
let y = "10"
if (x===y)
{
    console.log("loose equality")
}
else
{
    console.log("strict equality")
}
