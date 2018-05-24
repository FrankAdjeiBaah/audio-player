// Decalaring variables
const UIplayer = document.querySelector('.player');

// Creating the markup
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
songTitle.innerHTML  = 'WE ROCK FOREEVEr'
mainPlayer.appendChild(songTitle);

// Buttons Container
let buttons = createEl('div');
buttons.id = 'buttons';
mainPlayer.appendChild(buttons);

// Inside buttons 
let pre = createEl('button');
let next = createEl('button');
let play = createEl('button');

pre.id = 'pre';
next.id = 'next';
play.id = 'play';

buttons.appendChild(pre);
buttons.appendChild(next);
buttons.appendChild(play);

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
player.appendChild(time);

// Create seekbar
let seekbar = createEl('div');
seekbar.id = 'seek-bar';
player.appendChild(seekbar);

// Inside seekbar
let fill = createEl('div');
let handle = createEl('div');
fill.id = 'fill';
handle.id = 'handle';

seekbar.appendChild(fill);
seekbar.appendChild(handle);




// Function for creating Elements
function createEl(text){
    return document.createElement(text);
}


// const songs = ["music/Blues Saraceno  Dogs of War.mp3","music/Blues Saraceno - Devils Got You Beat.mp3","music/Blues Saraceno - Outlaw Justice.mp3"];
// const poster = ["images/poster1.jpg","images/poster2.jpg","images/poster3.jpg"];
// const songTitle = document.getElementById("songTitle");
// const fillBar = document.getElementById("fill");
// let time = document.getElementById('time');
// let song = new Audio();
// let currentSong = 0;    // it point to the current song
// window.onload = playSong;   // it will call the function playSong when window is load

// function playSong(){
//     song.src = songs[currentSong];  //set the source of 0th song 
//     songTitle.textContent = songs[currentSong].slice(6, -4); // set the title of song
//     song.play();    // play the song
// }

// function playOrPauseSong(){
//     if(song.paused){
//         song.play();
//         $("#play img").attr("src","images/Pause.png");
//     }
//     else{
//         song.pause();
//         $("#play img").attr("src","images/Play.png");
//     }
// }

// song.addEventListener('timeupdate',function(){ 
//     var position = song.currentTime / song.duration;
//     // console.log(Math.round(song.currentTime), song.duration)
//     time.innerHTML = Math.round(song.currentTime) + `s / ${Math.round(song.duration)}s`;
//     fillBar.style.width = position * 100 +'%';

//     if(song.currentTime == song.duration){
//         next();
//     }
// });


// function next(){
//     currentSong++;
//     if(currentSong > 2){
//         currentSong = 0;
//     }
//     playSong();
//     $("#play img").attr("src","images/Pause.png");
//     $("#image img").attr("src",poster[currentSong]);
//     $("#bg img").attr("src",poster[currentSong]);
// }

// function pre(){
//     currentSong--;
//     if(currentSong < 0){
//         currentSong = 2;
//     }
//     playSong();
//     $("#play img").attr("src","images/Pause.png");
//     $("#image img").attr("src",poster[currentSong]);
//     $("#bg img").attr("src",poster[currentSong]);
// }