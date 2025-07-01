"use strict";
let q = [1, 2, 3, 4,];
function d4() {
    const ind = Math.floor(Math.random() * q.length + 1);
    const selectedQuestionArray = q[ind];
    return selectedQuestionArray;
}
let Dice4 = d4();
if (Dice4) {
    console.log(`Dice of 4: ${Dice4[0]}`);
}
//# sourceMappingURL=Function.js.map