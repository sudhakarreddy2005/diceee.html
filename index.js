
alert(" Welcome to my site ,which makes you win without any agruments :0 ");
var name1 = prompt(" enter player 1 name : ");
var name2 = prompt(" enter player 2 name : ");
document.querySelectorAll("p")[0].innerHTML = name1;
document.querySelectorAll("p")[1].innerHTML = name2;
var randomNumber1 = Math.floor( Math.random() * 6) +1 ;

var randomimage = "dice"+randomNumber1+".png";

var image1 = "images/"+randomimage;

document.querySelectorAll("img")[0].setAttribute("src" , image1);


var randomNumber2 = Math.floor( Math.random() * 6) +1 ;

var randomimage2 = "dice"+randomNumber2+".png";

var image2 = "images/"+randomimage2;

document.querySelectorAll("img")[1].setAttribute("src" , image2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = name1+" 🚩 Wins :) ";
}
else if (randomNumber2 > randomNumber1 ){
    document.querySelector("h1").innerHTML = name2+" Wins :) 🚩 ";
}
else{
    document.querySelector("h1").innerHTML = " DRAW TRY AGAIN ";
}