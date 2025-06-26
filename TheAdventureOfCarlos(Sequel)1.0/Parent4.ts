namespace Adventure {
    type Parent = Window & { gameState4: boolean };
    declare let parent: Parent;

    console.log(parent);
    console.log(parent.gameState4);
    if (parent.gameState4 == true) {
        console.log("You can't get in again");
        location.href = "WaitCliffs.html";
        alert ("You can't do it again.");

    }
    parent.gameState4 = true;
    console.log(parent.gameState4);
}