"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", hndLoad);
    let balls = [];
    let timePreviousFrame = Date.now();
    let ballIdCounter = 0;
    function hndLoad() {
        for (let i = 0; i < 50; i++) {
            let newBall = {
                element: document.createElement("span"),
                position: {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight
                },
                velocity: {
                    x: (Math.random() - 0.5) * 20,
                    y: (Math.random() - 0.5) * 20
                },
                id: ballIdCounter++
            };
            newBall.element.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            newBall.element.dataset.ballId = newBall.id.toString();
            document.body.appendChild(newBall.element);
            balls.push(newBall);
        }
        update();
    }
    window.addEventListener("mousedown", onClick);
    function onClick(_event) {
        let target = _event.target;
        if (target.tagName.toLowerCase() === "span" && target.dataset.ballId) {
            const clickedBallId = parseInt(target.dataset.ballId);
            if (target.parentNode) {
                target.parentNode.removeChild(target);
            }
            const index = balls.findIndex(ball => ball.id === clickedBallId);
            if (index > -1) {
                balls.splice(index, 1);
                console.log(`Ball with ID ${clickedBallId} removed. Remaining balls: ${balls.length}`);
            }
        }
    }
    function checkCollisionAll() {
        for (const a in balls) {
            for (let b = Number(a) + 1; b < balls.length; b++)
                console.log(a, b);
        }
    }
    function update() {
        const timeCurrent = Date.now();
        let timeDelta = (timeCurrent - timePreviousFrame) / 5000;
        move(timeDelta);
        checkCollisionAll();
        timePreviousFrame = timeCurrent;
        requestAnimationFrame(update);
    }
    function move(timeDelta) {
        for (let ball of balls) {
            const speedScale = 100;
            ball.position.x += ball.velocity.x * timeDelta * speedScale;
            ball.position.y += ball.velocity.y * timeDelta * speedScale;
            ball.position.x = (ball.position.x % window.innerWidth + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y % window.innerHeight + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = `matrix(20, 0, 0, 20, ${ball.position.x}, ${ball.position.y})`;
        }
    }
    function checkCollision(_a, _b) {
    }
})(Ballz || (Ballz = {}));
//# sourceMappingURL=Ball.js.map