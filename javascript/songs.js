"use strict"
let songs = [];
let sectionRight = document.getElementById("rightColumn");
let addValues = document.getElementsByClassName("addField");

// Code below attaches a listener to the button to add a new song to the list. 
document.getElementById("addButton").addEventListener("click", function() {
    let outputString = ""; 
    for (let i = 0; i < addValues.length; i++) {
        outputString += addValues[i].value;
    }
    sectionRight.innerHTML += outputString;
});

// Most of this data was given in the instructions. Last 2 lines are my additions. 
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Nice Train > by The Donkeys on the album Living on the Other Side");
songs.push("Buckets of Rain > by Bob Dylan on the album Blood on the Tracks");

// This for loop adds the songs list to the DOM and also filters out the mistaken symbols. 
// NOTE THAT when a symbol is used is goes in brackets. When it is text string, just quotes. 
for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    song = song.replace(/[*@(!]/g, "");
    song = song.replace(/[>]/g, "<span class='bandAlbum'> -" );
    song = song.replace("on the album", " | ")
    sectionRight.innerHTML += `<p class="songInfo">${song}</span></p>`;    
};

// The next 11 lines or so are to make sure that the List View and Add View show up 
// when clicked corresponding links and loads correctly first time around. 
document.getElementById("addMusicView").classList.add("hidden");

document.getElementById("addMusicLink").addEventListener("click", function () {
    document.getElementById("listMusicView").classList.add("hidden");
    document.getElementById("addMusicView").classList.remove("hidden");
})

document.getElementById("listMusicLink").addEventListener("click", function () {
    document.getElementById("listMusicView").classList.remove("hidden");
    document.getElementById("addMusicView").classList.add("hidden");
})