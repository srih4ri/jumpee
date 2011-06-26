window.onload = function () {
    //start crafty
    Crafty.init(400, 336);
    Crafty.scene("loading");
};
Crafty.scene("loading",function(){
    Crafty.load(["slime.png"],function(){
	Crafty.scene("main");
    });
    Crafty.background("#f00");
    Crafty.e("2D,DOM,Text").attr({w: 100,h: 20,x: 150,y: 120}).text("Loading").css({"text-align": "center"});

});

Crafty.scene("main", function () {
        generateWorld();
   });


function generateWorld(){
    console.log("poda");
}