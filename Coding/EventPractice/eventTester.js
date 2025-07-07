"use strict";
var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.body.addEventListener('click', logInfo);
        document.body.addEventListener('keyup', logInfo);
        console.log(_event);
        document.addEventListener('mousemove', onMouseMovement);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        let divs = document.getElementsByClassName('Box');
        for (let value of divs) {
            value.addEventListener("click", logInfo);
            value.addEventListener("keyup", logInfo);
        }
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let infoBox = document.getElementById('Info-Box');
        if (infoBox) {
            infoBox.style.top = `${y + 20}px`;
            infoBox.style.left = `${x + 20}px`;
            infoBox.innerText = `${x},${y}
            target = ${_event.target}`;
        }
    }
    function logInfo(_event) {
        console.log(`
            type = ${_event.type}
            target = ${_event.target}
            currentTarget = ${_event.currentTarget}
            event = ${_event}
            `);
    }
    window.onload = function () {
    };
    function onMouseMovement(_event) {
        setInfoBox(_event);
    }
})(L02_Load || (L02_Load = {}));
//# sourceMappingURL=eventTester.js.map