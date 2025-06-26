"use strict";
var Adventure;
(function (Adventure) {
    console.log(parent);
    console.log(parent.gameState2);
    if (parent.gameState2 == true) {
        console.log("You can't get in again");
        location.href = "TheAdventureofCarlos.html";
        alert("You can't do it again.");
    }
    parent.gameState2 = true;
    console.log(parent.gameState2);
})(Adventure || (Adventure = {}));
