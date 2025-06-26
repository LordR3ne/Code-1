"use strict";
var Adventure;
(function (Adventure) {
    console.log(parent);
    console.log(parent.gameState3);
    if (parent.gameState3 == true) {
        console.log("You can't get in again");
        location.href = "WaitCliffs.html";
        alert("You can't do it again.");
    }
    parent.gameState3 = true;
    console.log(parent.gameState3);
})(Adventure || (Adventure = {}));
