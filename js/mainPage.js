// Date for the bottom of the screen
const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = "@Rachel Kunkel " + year;

// Ipod player music!
const playlists = [ 
    {name: "What am I listening to?", url: "#"},
    {name: "rainy day", url: "playlists/playlist1.html"},
    {name: "ooo yeah bust a move!", url: "playlists/playlist2.html"},
    {name: "driving w/ my windows down", url: "playlists/playlist3.html"},
    {name: "homework", url: "playlists/playlist4.html"},
    {name: "literally 97.1fm the drive", url: "playlists/playlist5.html"},
];

let currentIndex = 0;
const display = document.getElementById("display");

display.innerHTML = playlists[currentIndex];

// Updates which playlist is being shown
function updateDisplay() {
    const track = playlists[currentIndex];
    display.innerHTML = `<a href="${track.url}" target="_blank" style="color:#76B3D0; font-family:Barriciecito; text-decoration:none;">
        <h2>${track.name}</h2>
    </a>`;
}

updateDisplay();

// Displays the next song when next button is clicked
function nextSong() {
    if (currentIndex < playlists.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    document.getElementById('clickSound').play();
    updateDisplay();
}

// Displays the previous song when the previous button is clicked
function previousSong() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = playlists.length - 1;
    }
    document.getElementById('clickSound').play();
    updateDisplay();
}

// opens the link associated with the playlist
function selectSong() {
    document.getElementById('clickSound').play();
    window.open(playlists[currentIndex].url, '_blank');
}

// make splash screen fade
// get .splash div
const splash = document.querySelector('.splash');
// wait until DOM content has loaded, then trigger this event...
document.addEventListener('DOMContentLoaded', (event)=>{
    // wait 6s until we change the splash to the css "display-none"
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 6000);
});

// opens the guide tab
function guide() {
    var x = document.getElementById("guide");
    document.getElementById('clickSound').play();
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// opens the suggestions tab
function suggest() {
    var x = document.getElementById("suggest");
    document.getElementById('clickSound').play();
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}