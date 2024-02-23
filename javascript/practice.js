let a = 100;
let b = 150;
let c = 50;
let d = 50;


let m = (a+b+c+d)/a
let n = (c*d)/b
let o = (a+b)*(c+d)
let p = (b*c)-(a+d)

console.log(m);
console.log(n);
console.log(o);
console.log(p);




let firstsym = Symbol(20);
let secondsym = Symbol("second symbol");

console.log(firstsym, secondsym);
console.log(typeof firstsym, typeof secondsym);





let a1 = 20; //side of a rectangle
let  b1 = 30; //other side of rectangle
let  d1 = 25; //diagonal of the rectangle

let  L = 2*(a1+b1); //perimeter
let S = a1*b1; //area 

console.log("the perimeter of the rectangle : " + L)




let sumNl = null;
console.log(sumNl)




const car = { model: "veneno", name: "lamborghini", no: 2007} //example of object
 console.log(car);

 
 
 
 const car1 = { 
    model: "800", 
    name: "maruti", 
    no: 2007
} //example of objectin a different way

 console.log(car1);

 
 
 
 
 const details = {
    Name: 'Sudip Das',
    Post: 'NVK(QA)',
    P_No: '15362-R',
    Presen_Unit: 'ICGS Agrim',
    Now_Doing: 'IT Assistant Basic'

 };

 console.table(details);


 
 
 
 let someArr = ["Sudip", "someone else"]
 
 console.log(someArr);

 
 
 
 
 let employees = {
    leader: {
        id:"10001",
        firstname: "Andrew",
        email: "andrew@gmail.com"
    },
    manager: {        
        id:"10002",
        firstname: "Amit",
        email: "amit@gmail.com"
    },
    developer: {
        id:"10003",
        firstname: "Param",
        email: "param@gmail.com"
    }
}
console.table(employees,["id","firstname"]);





var employee = {
    leader: {
        id: "001",
        firstname: "Andrew",
        lastname: "Story",
        email: "andrew@gmail.com"
    },
    manager: {
        id: "002",
        firstname: "Amit",
        lastname: "Bhatt",
        email: "amit@gmail.com"
    },
    developer: {
        id: "003",
        firstname: "Param",
        lastname: "Dutta",
        email: "param@gmail.com"
    }
}
console.table(employee);





function Myname(){
console.log("S");
console.log("U");
console.log("D");
console.log("I");
console.log("P");
}

Myname()




function Myname(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("P");
    }
    
    Myname()
    Myname()



    function AddNum(a,b){
        console.table(a+b),
        console.table(a-b),
        console.table(a*b)
    }

    AddNum(50,30)
    AddNum(125,130)
    AddNum(550,330)
    AddNum(150,310)
 
 



    function userlogged(user){
        console.log("This one is user");
        return `${user} has logged in.`
    }

    console.log(userlogged('Sudip'));