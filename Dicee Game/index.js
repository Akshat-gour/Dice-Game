var randomNumber1=(Math.floor(Math.random()*6)+1);
document.querySelector("img").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=(Math.floor(Math.random()*6)+1);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");
var win="";
if(randomNumber1>randomNumber2)
{
  win="🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
  win="Player 2 Wins! 🚩";
}
else
{
  win="Draw";
}
document.querySelector("h1").textContent=win;
