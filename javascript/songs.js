"use strict"
let songs = [];
let sectionRight = document.getElementById("rightColumn");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Nice Train > by The Donkeys on the album Living on the Other Side");
songs.push("Buckets of Rain > by Bob Dylan on the album Blood on the Tracks");


for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    song = song.replace(/[*@(!]/g, "");
    song = song.replace(/[>]/g, "<span class='bandAlbum'> -" );
    sectionRight.innerHTML += `<p class="songInfo">${song}</span></p>`;    
};