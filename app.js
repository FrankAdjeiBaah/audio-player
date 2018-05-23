const songs = ["music/Blues Saraceno  Dogs of War.mp3","music/Blues Saraceno - Devils Got You Beat.mp3","music/Blues Saraceno - Outlaw Justice.mp3"];
const poster = ["images/Poster1.jpg","images/Poster2.jpg","images/Poster3.jpg"];
const songTitle = document.getElementById("songTitle");
const fillBar = document.getElementById("fill");
let time = document.getElementById('time');
let song = new Audio();
let currentSong = 0;    // it point to the current song
window.onload = playSong;   // it will call the function playSong when window is load

function playSong(){
    song.src = songs[currentSong];  //set the source of 0th song 
    songTitle.textContent = songs[currentSong].slice(6, -4); // set the title of song
    song.play();    // play the song
}

function playOrPauseSong(){
    if(song.paused){
        song.play();
        $("#play img").attr("src","images/Pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","images/Play.png");
    }
}

song.addEventListener('timeupdate',function(){ 
    var position = song.currentTime / song.duration;
    // console.log(Math.round(song.currentTime), song.duration)
    time.innerHTML = Math.round(song.currentTime) + `s / ${Math.round(song.duration)}s`;
    fillBar.style.width = position * 100 +'%';

    if(song.currentTime == song.duration){
        next();
    }
});


function next(){
    currentSong++;
    if(currentSong > 2){
        currentSong = 0;
    }
    playSong();
    $("#play img").attr("src","images/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}

function pre(){
    currentSong--;
    if(currentSong < 0){
        currentSong = 2;
    }
    playSong();
    $("#play img").attr("src","images/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}