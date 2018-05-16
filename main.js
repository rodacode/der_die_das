words=[
    {
        word:"Arbeit",
        answer:"Die"
    },
    {
        word:"Sohnne",
        answer:"Die"
    },
    {
        word:"Kind",
        answer:"Das"
    },
    {
        word:"Löwe",
        answer:"Der"
    }
    ,
       {
        word:"Freitag",
        answer:"Der"
    }
];

let score=0;
let i=0;

function start(){
    console.log("game on");
    document.getElementById("game-container").innerHTML=
    "<div id='score'><h5>SCORE:"+score+"</h5></div><div id='words-container'><h3 class='text-center'>"+words[i].word+"</h3></div><div class='row text-center'><div class='buttons text-center'><button id='der' class='btn btn-light' type='button' onclick='check(\"Der\");'>DER</button><button id='die' class='btn btn-light' type='button' onclick='check(\"Die\");'>DIE</button><button id='das' class='btn btn-light' type='button' onclick='check(\"Das\");'>DAS</button></div></div>";
}

function check(answer){
    if(answer == words[i].answer){
        score++;
        document.getElementById("result").innerHTML="<h4 class='text-center'>Richtig!</h4><br><span class='danke'><h5 class='text-center'>"+words[i].answer+" "+words[i].word+"</h5></span>";
/*
        if (words[i].answer == "Der"){
        document.getElementById("der").classList.toggle("correct");
        }
        if (words[i].answer == "Die"){
            document.getElementById("die").classList.toggle("correct");
            }
        if (words[i].answer == "Das"){
            document.getElementById("das").classList.toggle("correct");
            }
*/
    }
    else{
        document.getElementById("result").innerHTML="<h4 class='text-center'>Nein :( ... Es ist Richtig </h4><br><span class='danke'><h5 class='text-center'>"+words[i].answer+" "+words[i].word+"</h5></span>";
    }
    i++;
    updateScore();
    if (i >= words.length){
        gameOver();
    }
    else{
        nextWord();
    }
    
}

function nextWord(){
    document.getElementById("words-container").innerHTML="<h3 class='text-center'>"+words[i].word+"</h3>";

};

function updateScore(){
    document.getElementById("score").innerHTML="<h5>SCORE:"+score+"</h5>";

}

function gameOver(){
    document.getElementById("game-over").innerHTML="<h4 class='text-center'>Spiel ist aus :/ <span class='danke'>Danke fürs Spielen</span></h4>";

}


