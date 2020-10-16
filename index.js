var randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber + ".png");
var SecondRandomNumber = Math.random();
SecondRandomNumber = Math.floor(SecondRandomNumber * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice" + SecondRandomNumber + ".png");

if(randomNumber > SecondRandomNumber){
    document.querySelector("h1").textContent = "Player 1 Win!";
}
else if(SecondRandomNumber > randomNumber){
    document.querySelector("h1").textContent = "Player 2 Win!";
}
else{
    document.querySelector("h1").textContent = "Draw";
}