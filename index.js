
var colors =["red","blue","green","yellow"];
var pattern=[];
var userpattern=[];
var start=false;
var lvl=0;

$(document).keypress(function(){
    
    if(start==false){
        
        
        sequence();
        start=true;
    }
})


function sequence(){
    
    $("h1").text("Level "+lvl);
    lvl++;
    userpattern=[];
    var idx = Math.floor(Math.random()*4);
    var randomColor=colors[idx];
    pattern.push(randomColor);
    indicate(randomColor);
    playAudio(randomColor); 
    
    
}

$(".btn").click(function(){
    userpattern.push(this.classList[1]);
    clicked(this.classList[1]);
    playAudio(this.classList[1]);
    check(userpattern.length-1);
})

function check(i)
{
    if(pattern[i]==userpattern[i])
    {
        if(pattern.length==userpattern.length)
        {
            setTimeout(function () {
                sequence();
              }, 1000);
        }
    }
    else    
    {
        playAudio("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        restart();
    }
}

function restart(){
    lvl=1;
    pattern=[];
    start=false;
}

function playAudio(color)
{
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function indicate(color){
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
   
}

function clicked(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("."+color).removeClass("pressed");
    },100);
}


