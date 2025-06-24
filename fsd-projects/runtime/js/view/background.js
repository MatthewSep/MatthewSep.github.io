
var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var tree
    var building
    var hill
    var trees = []
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var BelowBackgroundFill = draw.rect(canvasWidth,canvasHeight, "black");
            background.addChild(BelowBackgroundFill);
            var backgroundFill = draw.rect(canvasWidth,canvasHeight / 2, "#3a3c40");
            background.addChild(backgroundFill);
            // TODO 2: - Add a moon and starfield
            for (var i = 0; i < 100; i++) {
                var circle = draw.circle(1, "white", "white", 1)
            circle.x = canvasWidth * Math.random()
            circle.y = groundY * Math.random()
            background.addChild(circle)
        }
            var moon = draw.bitmap("img/bettermoon.webp")
            moon.x = 1000
            moon.y = 50
            moon.scaleX = 0.6
            moon.scaleY = 0.6
            background.addChild(moon)
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
        //   for (var i = 0; i < 10; ++i) {
        //     var buildingHeight = Math.random()* 100 + 200;
        //     var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
        //     building.x = 200 * i + 25;
        //     building.y = groundY - buildingHeight;
        //     building.scaleX = 1.2
        //     background.addChild(building);
        //     // buildings.push(building);
        // }
        //   for (var i = 0; i < 6; i++) {
        //     hill = draw. bitmap("img/hills.webp")
        //     hill.x = i * 400
        //     hill.y = groundY - 200
        //     hill.scaleleX = 0.3
        //     hill.scaleY = 0.3
        //     background.addChild(hill)
        //   }
            // TODO 3: Part 1 - Add a tree
                       for (var i = 0; i < 1; ++i) {
            var buildingHeight = 70;
            var building = draw.rect(1750, buildingHeight, "#10751b", "#10751b", 1);
            building.x = 70 * i;
            building.y = groundY - buildingHeight +20;
            building.scaleX = 1.2
            background.addChild(building);
            // buildings.push(building); 
               }
          for (var i = 0; i < 22; i++) {
            tree = draw.bitmap("img/tree.webp")
            tree.x = i * 100 - Math.random() * 30
            tree.y = groundY - 285 - Math.random() * 30
            tree.scaleX = 0.3
            tree.scaleY = 0.3
            background.addChild(tree)
            trees.push(tree)
          }
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
        for (var i = 0; i < trees.length; i++) {
            var singleTree = trees[i]
            singleTree.x = singleTree.x - 1
        if (singleTree.x < -300) {
        singleTree.x = canvasWidth
        }
    }
        // TODO 4: Part 2 - Parallax



        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
