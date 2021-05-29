//For footer
let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDate()

window.onload = function() {
    document.getElementById("home").play();
}
 
//Audio Files
let AudioStorm = new Audio('audio/Storm.mp3');
let AudioNight = new Audio('audio/Night.mp3');
let AudioRain = new Audio('audio/Rain.mp3');
let AudioGame = new Audio('audio/Game.mp3');
let AudioForest = new Audio('audio/Forest.mp3');
let AudioSea = new Audio('audio/Sea.mp3');
let AudioHome = new Audio('audio/Home.mp3');

//Stop Audios
function stopAll(){
    AudioForest.pause();
    AudioGame.pause();
    AudioRain.pause();
    AudioNight.pause();
    AudioSea.pause();
    AudioStorm.pause();
    AudioHome.pause();
}

function home(){
    stopAll();
    AudioHome.play();
    document.querySelector('input[name="theme"]:checked').checked = false;
    document.getElementById('page_body').className="body"; 
}

//OnClick Imgs
function night(){
    stopAll();
    AudioNight.play();
    document.getElementById('page_body').className="night";   

}

function rain(){
    stopAll();
    AudioRain.play();  
    document.getElementById('page_body').className="rain";  

}

function storm(){
    stopAll();
    AudioStorm.play();
    document.getElementById('page_body').className="storm"; 

}

function game(){
    stopAll();
    AudioGame.play();
    document.getElementById('page_body').className="game";  

}

function forest(){
    stopAll();
    AudioForest.play();
    document.getElementById('page_body').className="forest";   

}

function sea(){
    stopAll();
    AudioSea.play();    
    document.getElementById('page_body').className="sea";    

}

