namespace Ballz {
    type Vector = { x: number, y: number };

    type Ball = {
        element: HTMLSpanElement;
        position: Vector;
        velocity: Vector;
        id: number;
    }

    window.addEventListener("load", hndLoad);
    let balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();
    let ballIdCounter: number = 0;

    function hndLoad(): void {
        for (let i = 0; i < 50; i++) {
            let newBall: Ball = {
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

    function onClick(_event: MouseEvent) {
        let target: HTMLElement = _event.target as HTMLElement;

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
    function checkCollisionAll(): void {
            for (const a in balls) {
            for (let b: number = Number (a)+1; b < balls.length; b++)
                console.log(a, b)
            }
        }


    function update() {
        const timeCurrent: number = Date.now();
        let timeDelta: number = (timeCurrent - timePreviousFrame) / 5000; 
        move(timeDelta);
        checkCollisionAll();
        timePreviousFrame = timeCurrent;
        requestAnimationFrame(update); 
    }

    function move(timeDelta: number): void {
        for (let ball of balls) {
            const speedScale = 100;
            ball.position.x += ball.velocity.x * timeDelta * speedScale;
            ball.position.y += ball.velocity.y * timeDelta * speedScale;
            ball.position.x = (ball.position.x % window.innerWidth + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y % window.innerHeight + window.innerHeight) % window.innerHeight;


            ball.element.style.transform = `matrix(20, 0, 0, 20, ${ball.position.x}, ${ball.position.y})`;
        }
    }
}