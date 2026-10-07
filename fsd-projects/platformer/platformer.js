$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(400, 500, 400, 1000, "lime"); // bright green for a finished platform
createPlatform(200, 700, 50, 50, "red");
createPlatform(300, 600, 50, 50, "red");
 createPlatform(300, 1300, 20, 400);
 createPlatform(13000, 400, 400, 700, "red");
createPlatform(800, 500, 0, 20, "lime"); // bright green for a finished platform
 
 createPlatform(500, 400, 70, 70, "red");
  // bright green for a finished platform
 createPlatform(600, 800,500 , 400);
 createPlatform(400, 800, 300, 400, "lime"); // bright green for a finished platform

 createPlatform(700, 300, 50, 50, "red");
 createPlatform(700, 350, 500, 10, "lime"); // bright green for a finished platform
 createPlatform(800, 200, 50, 50, "red");
 createPlatform(900, 100, 50, 50, "red");




    // TODO 3 - Create Collectables

createCollectable("steve", 500,300);
createCollectable("diamond", 300, 150, 0.2, 0.9);
createCollectable("steve",700, 170, 0.2, 0.9);
createCollectable("steve", 900, 50);
createCollectable("diamond", 800, 150, 0.8, 0.7);
createCollectable("diamond", 200, 600, 0.8, 0.7);


    
  //   TODO 4 - Create Cannons
createCannon("top", 200, 2000);
createCannon("right", 300, 2000);
createCannon("bottom", 300,2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
