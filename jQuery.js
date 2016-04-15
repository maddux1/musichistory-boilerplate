"use strict"

// $.ajax({
//     url: "classics.json"
// }).done(function(data) {
//     buildDomClassics(data);
// });

function buildDomClassics(songList){
    for (let i = 0; i < songList.classicsObj.length; i++) {
        let currentSong = songList.classicsObj[i];
        $("#newStuff").append("<section class='newSong'><input type='button'class='deleteButton' value='X'></div> <div> " + currentSong.song + "</div> |" + " <div>" + currentSong.artist + "</div> |" + " <div>" + currentSong.album + "</div></section>");
    };
    addDeleteButtons();
};

// $.ajax({
//     url: "newStuff.json"
// }).done(function(data) {
//     buildDomNewStuff(data);
// });

function buildDomNewStuff(songs) {
    let more = $("#moreButton");
    more.click(function() {
        loadNew(songs);
    });
};

function loadNew(songList){
    for (let i = 0; i < songList.newStuffObj.length; i++) {
        let currentSong = songList.newStuffObj[i];
        $("#newStuff").append("<section class='newSong'><input type='button'class='deleteButton' value='X'></div> <div> " + currentSong.song + "</div> |" + " <div>" + currentSong.artist + "</div> |" + " <div>" + currentSong.album + "</div></section>");
    };
    addDeleteButtons();
};

// function addDeleteButtons() {
//     $(".deleteButton").click(function() {
//         $(this.parentNode.remove(this));
//     });
// };





