"use strict";
var Quiz;
(function (Quiz) {
    let QuestionA = ["Hello"];
    let QuestionB = ["Hello1"];
    let QuestionC = ["Hello2"];
    let QuestionD = ["Hello3"];
    let QuestionE = ["Hello4"];
    let q = [QuestionA, QuestionB, QuestionC, QuestionD, QuestionE];
    function getRandomQuestion() {
        if (q.length === 0) {
            console.log("No more questions");
            return undefined;
        }
        const ind = Math.floor(Math.random() * q.length);
        const selectedQuestionArray = q[ind];
        q = q.slice(0, ind).concat(q.slice(ind + 1));
        return selectedQuestionArray;
    }
    console.log("Quiz start");
    let question1 = getRandomQuestion();
    if (question1) {
        console.log(`Question 1: ${question1[0]}`);
    }
    let question2 = getRandomQuestion();
    if (question2) {
        console.log(`Question 2: ${question2[0]}`);
    }
    let question3 = getRandomQuestion();
    if (question3) {
        console.log(`Question 3: ${question3[0]}`);
    }
    let question4 = getRandomQuestion();
    if (question4) {
        console.log(`Question 4: ${question4[0]}`);
    }
    let question5 = getRandomQuestion();
    if (question5) {
        console.log(`Question 5: ${question5[0]}`);
    }
    console.log("Quiz end");
})(Quiz || (Quiz = {}));
//# sourceMappingURL=TestCode.js.map