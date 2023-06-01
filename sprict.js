// console.log(document);

document.getElementById("link");
// console.log(link);
console.log(link.href);
link.style.color = "green";

 var para = document.getElementById("para");
 console.log(para);

 function hide(){
para.style.display = "none";
 }

 function show(){
    para.style.display = "block";
 }

 function bulb_on(){
    document.getElementById("bulb").src='images/pic_bulbon.gif';
 }
 function bulb_off(){
    document.getElementById("bulb").src='images/pic_bulboff.gif';
 }