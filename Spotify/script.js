console.log('Welcome to Spotify');

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let  myProgressBar = document.getElementById('myProgressBar');



let songs = [
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
    {songName: "KOi kay kehta rahy", filePath: "Spotfify/1.mp3", coverPath: "covers/1.jp"},
]


// Hnadle Play/Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('')
    }
})
// Listen tO Event

