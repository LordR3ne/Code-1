"use strict";
var Adventure;
(function (Adventure) {
    console.log(parent);
    console.log(parent.gameState);
    if (parent.gameState == true) {
        console.log("You can't get in again");
        alert("You can't do it again.");
        location.href = "TheAdventureofCarlos.html";
    }
    parent.gameState = true;
    console.log(parent.gameState);
})(Adventure || (Adventure = {}));
