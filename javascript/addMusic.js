"use strict";

// <-- - - - - - - FORM TO ADD A NEW SONG - - - - - - - - --> 
function addMusicViewForm() {
        let string = "";
        string += "<div id='addMusicForm' class='col-md-4 col-md-offset-4'><p>Song name" +
        "</p><input type='text' id='songInput' class='addField'>" +
        "<p>Artist </p><input type='text' id='artistInput' class='addField'>" +
        "<p>Album </p><input type='text' id='albumInput' class='addField'>" + 
        "<button id='addButton' class='btn btn-default button'>Add</button></div>";
        $("#addMusicView").append(string);
    }

// <-- - - - - TOGGLING BTW LIST MUSIC VIEW / ADD MUSIC VIEW - - - - > 
function addMusicViewToggle() {
        $("#addMusicView").hide();
        $("#addMusicLink").click(function () {
            $("#addButton").attr("edit_id", "");
            $("#listMusicView").hide();
            $("#addMusicView").fadeIn();
        });
        $("#listMusicLink").click(function () {
            loadMusicList(newMusicToDOM); // <--- REFRESHES MUSIC LIST
            $("#listMusicView").fadeIn();
            $("#addMusicView").hide();
            emptyAddForm();
        });
    }

// <-- - - - - - - TESTS TO SEE IF THIS IS A COPY OR ADD METHOD - - - - - --> 
$("#addMusicView").on("click", "#addButton", function(){
    if ($(this).attr("edit_id") === "") {
        addSong();
    } else {
        editSong();
    }
});

// <-- - - - - - ADDS NEW SONG TO FIREBASE - - - - - - - - -->
function addSong() {
    let newSong = {
    "album": $("#albumInput").val(), 
    "artist": $("#artistInput").val(), 
    "song": $("#songInput").val()
    };
    $.ajax({
        url:"https://music-history-tdm.firebaseio.com/newStuffObj/.json",
        type: "POST",
        data: JSON.stringify(newSong)
    }).done(function(){ 
        loadMusicList(newMusicToDOM); // <--- REFRESHES MUSIC LIST 
        $("#addMusicView").hide();
        $("#listMusicView").fadeIn();
        emptyAddForm(); // <--- EMPTIES INPUT VALUES 
    });
};

// <-- - - - - - EDITS EXISTING SONG IN FIREBASE - - - - - -->
function editSong() {
    let newSong = {
    "album": $("#albumInput").val(), 
    "artist": $("#artistInput").val(), 
    "song": $("#songInput").val()
    };
    $.ajax({
        url:`https://music-history-tdm.firebaseio.com/newStuffObj/${$("#addButton").attr("edit_id")}.json`,
        type: "PUT",
        data: JSON.stringify(newSong)
    }).done(function(){ 
        loadMusicList(newMusicToDOM); // <--- REFRESHES MUSIC LIST 
        $("#addMusicView").hide();
        $("#listMusicView").fadeIn();
        $("#addButton").attr("edit_id", "");
        emptyAddForm(); // <---- EMPTIES INPUT VALUES
    });
};

// <-- - - - CLEARS ALL ADDMUSICVIEW INPUT VALUES - - - - -->
function emptyAddForm() {
    $("#albumInput").val(""); 
    $("#artistInput").val("");
    $("#songInput").val("");
}