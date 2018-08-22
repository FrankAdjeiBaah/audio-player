// 
// Building Markup
// 

// Decalaring variables
const UIplayer = document.querySelector('.player');

// Background parent div
let background = createEl('div');
background.id = 'bg';

// Elements inside Background Container
let blacklayer = createEl('div');
let bgImg = createEl('img');
blacklayer.id = 'blackLayer';
bgImg.src = 'images/poster1.jpg';

UIplayer.appendChild(background);
background.appendChild(blacklayer);
background.appendChild(bgImg);

// Creating Main Container
let main = createEl('div');
main.id = 'main';
UIplayer.appendChild(main);

// Creating the 2 containers inside #main
let mainImage = createEl('div');
let mainPlayer = createEl('div');
mainImage.id = 'image';
mainPlayer.id = 'player';

// element inside mainImage
let image = createEl('img');
image.src = 'images/poster1.jpg';
main.appendChild(mainImage);
mainImage.appendChild(image);

// Player Div ID
main.appendChild(mainPlayer);
let songTitle = createEl('div');
songTitle.id = 'songTitle';
// For testing and visual
songTitle.innerHTML  = 'WE ROCK FOREEVEr';
mainPlayer.appendChild(songTitle);

// Buttons Container
let buttons = createEl('div');
buttons.id = 'buttons';
mainPlayer.appendChild(buttons);

// Inside buttons 
let pre = createEl('button');
let play = createEl('button');
let next = createEl('button');

pre.id = 'pre';
next.id = 'next';
play.id = 'play';

buttons.appendChild(pre);
buttons.appendChild(play);
buttons.appendChild(next);

// Inside each button there is an image
let preImg = createEl('img');
preImg.src = 'images/Pre.png';
pre.appendChild(preImg);

let nextImg = createEl('img');
nextImg.src = 'images/Next.png';
next.appendChild(nextImg);

let playImg = createEl('img');
playImg.src = 'images/Play.png';
play.appendChild(playImg);


// Append Timer Div inside #player container
let time = createEl('div');
time.id = 'time';
time.innerHTML = '0s / 0s';
player.appendChild(time);

// Create seekbar
let seekbar = createEl('div');
seekbar.id = 'seek-bar';
player.appendChild(seekbar);

// Inside seekbar
let fillBar = createEl('div');
let handle = createEl('div');
fillBar.id = 'fill';
handle.id = 'handle';
seekbar.appendChild(fillBar);
seekbar.appendChild(handle);

// Function for creating Elements
function createEl(text){
    return document.createElement(text);
}

// 
//  Functionality
// 

// Declaring Variables
const songs = ["music/Blues Saraceno  Dogs of War.mp3","music/Blues Saraceno - Devils Got You Beat.mp3","music/Blues Saraceno - Outlaw Justice.mp3"];
const poster = ["images/poster1.jpg","images/poster2.jpg","images/poster3.jpg"];
let song = new Audio();
let currentSong = 0;    // it point to the current song
playSong();
playImg.src = 'images/Pause.png';  

pre.addEventListener('click', preSong);
next.addEventListener('click', nextSong);
play.addEventListener('click', playOrPauseSong);

// Play a song with currentIndex
function playSong(){
    song.src = songs[currentSong];  //set the source of 0th song 
    songTitle.textContent = songs[currentSong].slice(6, -4); // set the title of song
    song.play();    // play the song
}

// Function for Play/Pause a song
function playOrPauseSong(){
    // If its paused and clicked to play
    if(song.paused){
        song.play();
        $("#play img").attr("src","images/Pause.png");
    }
    else{ // if its playing and clicked to pause
        song.pause();
        $("#play img").attr("src","images/Play.png");
    }
}
// Event listener for timeupdate
song.addEventListener('timeupdate',function(){ 
    // Declaring the variable on each timeupdate
    var position = song.currentTime / song.duration;
    // Updating the seconds/time container
    time.innerHTML = Math.round(song.currentTime) + `s / ${Math.round(song.duration)}s`;
    // Updating the width from the currentTime
    fillBar.style.width = position * 100 +'%';
    // If song is finished, play next
    if(song.currentTime == song.duration){
        nextSong();
    }
});

// nextsong
function nextSong(){
    // next song add 1 on current song var
    currentSong++;
    // Larger than 2, go back to 0(3 songs in the array)
    if(currentSong > 2){
        currentSong = 0;
    }
    // Start the song
    playSong();
    // Assign images
    $("#play img").attr("src","images/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}
// previous song
function preSong(){
    // Take one fromo the index 
    currentSong--;
    // If its less than 0 go back to 2
    if(currentSong < 0){
        currentSong = 2;
    }
    // Start the song
    playSong();
    // Assign images
    $("#play img").attr("src","images/Pause.png");
    $("#image img").attr("src",poster[currentSong]);
    $("#bg img").attr("src",poster[currentSong]);
}