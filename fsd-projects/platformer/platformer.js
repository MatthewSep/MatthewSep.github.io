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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "lightgreen"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    

    // TODO 2 - Create Platforms
    createPlatform(500,700,200,40);
    createPlatform(700,625,200,20);
    createPlatform(300,650,80,90);
    createPlatform(150,550,100,20);
    createPlatform(1000,575,100,20);
    createPlatform(1200,500,200,20);
    createPlatform(950,375,100,20);
    createPlatform(1250,300,150,20)
    createPlatform(1390,0,20,750)
    createPlatform(0,0,20,750)
    createPlatform(650,330,175,20)
    createPlatform(975,200,100,20)
    createPlatform(650,300,100,40)
    createPlatform(400,175,200,20)
    // TODO 3 - Create Collectables
  createCollectable("coin", 175, 475,);
  createCollectable("coin", 770, 250);
  createCollectable("coin", 1300, 100);
  createCollectable("coin", 475, 100)
  createCollectable("coin", 75,75)
  createPlatform(200,200,75,20)


    
    // TODO 4 - Create Cannons
createCannon("left", 100, 1000)
createCannon("bottom",950,800)
createCannon("top",250,1200)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
