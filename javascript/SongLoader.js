"use strict";

// <-- - - - - - CALLS DATA FROM FIREBASE - - - - - - --> 
function loadMusicList(resolve){
    $.ajax({
        url: "https://music-history-tdm.firebaseio.com/newStuffObj/.json"
    }).done(function(data) {
        resolve(data);
    });
}

// <-- - - - - EVENT LISTENERS AND OTHER SHIZ - - - - - --> 
$(window).load(function() {
    addMusicViewForm(); // <-- - - - - - ADD MUSIC VIEW FORM 
    addMusicViewToggle(); // <-- - - - - ...AND FUNCTIONALITY 
});