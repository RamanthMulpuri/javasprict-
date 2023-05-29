//document.write("Hello,Welcome to the javascript class!!!");

//document.getElementById("para").innerHTML = "content added!!!";

//console.log("Hello Ramanth!!!");

//window.alert("Hello Ramanth");
//alert("Ram")


//function message(name){
    //console.log(name);  
//}

//message("raman");
//message("4567");
//message("ture");

//function message(name){
   // console.log(name + " says hello ");  
//}
//message("Raman")

//function person(name,age,role){
    //console.log("the user " + name + " is " +  age + " years old " + " he is a " + role);
//}

//person("Raman", 30, "developer")

//function demo(){
    //return "this is demo function"
//}

//console.log(demo());

//function sub(a,b){
    //return a - b;
//}

//console.log(sub(10,5))

function sample(){
    return arguments.length;
}

console.log(sample(3,4,5));

var x = 10;

function sample(a){
    console.log(a + 30);
}

sample(x);
console.log(x)

var person = {name: "john"};
person.name ="david";
console.log(person);

function Yellout(){
    alert("Rammmmmmmmmmmanth");
}

Yellout();

var person = {name:"john",age: 20, info: function(){
    return (person.name + " is " + person.age + " years old ");
}}

console.log(person.name)
console.log(person.age)
console.log(person.info())

function mobile(name, price, color){
    this.name = name;
    this.price = price;
    this.color = color;
}

var mobileOne = new mobile("iphone", "500000", "gold");
 var mobileTwo = new mobile("samsung s23","30000", "purple");
 var mobileThree = new mobile("Realme", "15000" ,"gray");

 console.log(mobileOne. color);
 console.log(mobileTwo);
 console.log(mobileThree);

 (function(){
    console.log("I have self invocked myself!");
 })();


 var colors = ["red", "green", "blue"];

 
 console.log(colors[0]);
 console.log(colors[1]);
 console.log(colors[2]);
 
 
    var person = {name: "email",age: 50, role: "developer",hobbies: 
    ["sleeping", "eating"], info: function(){
        console.log(person.name + " is " + this.age + "years old" + and);

    }};

    document.write(person.name + "<br/>");
    document.write(person.age + "<br/>");
    document.write(person.role + "br/>");
    document.write(person.hobbies + "<br/>")
    document.write(person.hobbies[0] + "<br/>");
    document.write(person.hobbies[1] + "<br/>");



