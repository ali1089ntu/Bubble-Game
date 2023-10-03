
let hit = '';
let bubble = '';
let rn = '';
let timer = 60;
let score = 0;
let si = '';

function makeBubble () {
for (i=1; i<=160; i++){
    rn = Math.floor(Math.random () * 10);
    bubble += `<button class="buttons">${rn}</button>`;
}
document.getElementById("subdiv2").innerHTML = bubble;
}

function setHit () {
hit = Math.floor(Math.random()*10);
document.getElementById("box1").innerHTML = hit;
}

function setTimer () {
    si = setInterval (function (){
    if (timer > 0){
        timer = timer - 1;
        document.getElementById ("box2").innerHTML = timer;
    }
    else {
        clearInterval (si);
        document.getElementById ("subdiv2").innerHTML = `<h2>Time is over!</h2>`;
        document.getElementById ("subdiv2").innerHTML += `<h3>Your total score is : ${score}</h3>`
    }
},1000);
}

function setScore () {
    score = score + 10;
    document.getElementById ("box3").innerHTML = score;
}

document.getElementById("subdiv2").addEventListener ("click" , (e)=>{
    let clickedNum = Number(e.target.innerHTML);
    if (clickedNum === hit){
        setScore ();
        setHit ();
        bubble = '';
        makeBubble ();
    }
    else {
        clearInterval (si);
        document.getElementById ("subdiv2").innerHTML = `<h2>Game Over!</h2>`;
        document.getElementById ("subdiv2").innerHTML += `<h3>Your total score is : ${score}</h3>`
    }
});


makeBubble ();
setTimer ();
setHit ();



