//alert("Just click the OK button")

console.log(10);
console.log({fname:"Jeevi", lname:"S"});


var a = 30;
let b = 50;
const d = 70;
c=a+b
console.log(a);
console.log(b);
console.log("c :"+c);
 
console.log({fname:"Jeevi", lname:"S"});
console.table({fname:"Jeevi", lname:"S"});
 
console.log(d);

var a1= 5;
var a2= 7;
//arithmetic
console.log(a1+a2);
console.log(a1-a2);
console.log(a1*a2);
console.log(a1/a2);
console.log(a1%a2);
console.log(a1**a2);
//assignment
var b1=10;
console.log(b1+=20);
console.log(b1-=20);
console.log(b1*=20);


function checkgrade(){
    console.log("welcom");
    console.log("jus trying js");
}
checkgrade()

var checkgrade1 = (a,b)=>{
    return a+b;
}
console.log(checkgrade1(1,2));




function signals(){
signal="red"
if(signal=="red"){
    console.log("Stop");
}
else if(signal=="green"){
    console.log("go");
}
else if(signal=="orange"){
    console.log("wait");
}
}
signals()


for(count=1;count>=10;count=count+1){
    console.log(count);
}


function arithmetic(a,b){
    console.log("Value of A is :",a, "and The value of B is :",b);   
    console.log("add :",a+b);   
    console.log("sub :",a-b);   
    console.log("mul :",a*b);   
    console.log("div :",a/b);   
    console.log("mod :",a%b);   
}
arithmetic(2,3)




function check(explore){
    switch(explore){
        case 1:
            console.log("Statement 1 has executed");
            break;
        case 2:
            console.log("Statement 2 successfully verified");
            break;
        case 3:
            console.log("Not more much enough for statement 3");
            break;
        default:
            console.log("There no case in this field");

    }
}
check(4)

function checkstring(a){
    switch(a){
        case 'py':
            console.log("The value is A");
            break;
        case 'js':
            console.log("The value is B");
            break;
        case 'sq':
            console.log("The value is C");
            break;
        default:
            console.log("This is not valied");
    }
}
checkstring(prompt("Enter some other"))


