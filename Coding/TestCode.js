"use strict";
var TestCode;
(function (TestCode) {
    let x = 2;
    if (x == 1) {
        console.log("Hello!");
    }
    else
        console.log("Goodbye!");
    switch (x) {
        case 1:
            console.log("Case 1");
            break;
        case 2:
            console.log("Case 2");
            break;
        case 3:
            console.log("Case 3");
            break;
        default: console.log("Error");
    }
})(TestCode || (TestCode = {}));
//# sourceMappingURL=TestCode.js.map