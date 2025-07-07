"use strict";
var diceGame;
(function (diceGame) {
    function rollD4() {
        return Math.floor(Math.random() * 4) + 1;
    }
    console.log("Your D4 result is:", rollD4());
    function rollD6() {
        return Math.floor(Math.random() * 6) + 1;
    }
    console.log("Your D6 result is:", rollD6());
    function rollD8() {
        return Math.floor(Math.random() * 8) + 1;
    }
    console.log("Your D8 result is:", rollD8());
    function rollD10() {
        return Math.floor(Math.random() * 10) + 1;
    }
    console.log("Your D10 result is:", rollD10());
    function rollD12() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log("Your D12 result is:", rollD12());
    function rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }
    console.log("Your D20 result is:", rollD20());
})(diceGame || (diceGame = {}));
//# sourceMappingURL=Function.js.map