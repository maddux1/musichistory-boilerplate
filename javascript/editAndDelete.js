"use strict";

// <-- - - - - - - - DELETES BUTTON FUNCTIONS - - - - - - - --> 
$(document).on("click", ".deleteButton", function() {
    $.ajax({
        url: `https://music-history-tdm.firebaseio.com/newStuffObj/${$(this).parent().attr("id")}.json`,
        type: "DELETE"
    }).done(function(){
        loadMusicList(newMusicToDOM); // <--- REFRESHES MUSIC LIST
    });
});

// <-- - - - - - EDIT FUNCTIONALITY FOR SONGS - - - - - - -->
$(document).on("click", ".editButton", function() {
    $.ajax({
        url: `https://music-history-tdm.firebaseio.com/newStuffObj/${$(this).parent().attr("id")}.json`,
        type: "GET"
    }).done(function(songData){
        sendSongDataToEdit(songData); // <-- - - - (SEE BELOW) - - - -->
    });
    $("#addButton").attr("edit_id", $(this).parent().attr("id")); // <-- PLACES FIREBASE KEY TO THE ADDMUSIC BUTTON 
});

// <-- - - - - SEND SONG INFO TO ADDMUSIC FORM FOR EDITS - - - - - --> //
function sendSongDataToEdit(songInfo) {
    $("#listMusicView").hide();
    $("#addMusicView").show();
    $("#albumInput").val(songInfo.album);
    $("#artistInput").val(songInfo.artist);
    $("#songInput").val(songInfo.song);
}