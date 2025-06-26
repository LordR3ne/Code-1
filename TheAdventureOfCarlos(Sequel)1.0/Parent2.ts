namespace Adventure {
    type Parent = Window & { gameState2: boolean };
    declare let parent: Parent;

    console.log(parent);
    console.log(parent.gameState2);
    if (parent.gameState2 == true) {
        console.log("You can't get in again");
        location.href = "TheAdventureofCarlos.html";
         alert ("You can't do it again.");

    }
    parent.gameState2 = true;
    console.log(parent.gameState2);
}