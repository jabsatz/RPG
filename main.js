//Declaracion de variables
var game, display, input;

//Load y run
function main() {
  game = {}

  display = new Screen(512, 630);

  input = new inputHandler();

  bump = new Audio("res/bump.wav");

  theme = new Audio("res/theme.mp3");
  theme.loop = true;
  
  init();

  loop = function() {
    update();
    render();

    game.stopLoop = window.requestAnimationFrame(loop);
    //Para frenar el juego: window.cancelAnimationFrame( game.stopLoop );
  };

  loop();

};

//Declaración de variables
var player, world, map, menu;

//Estado Inicial
function init() {

  menu = new Menu([1,2,3], 0);
  menu.init();

  map = generateMap();

  world = new World(map);
  world.init();

  player = new Player(1, world.width/2, world.height/2);

}

//Update Lógico
function update() {

  player.update();
  world.update();
  menu.update();

};

//Update Gráfico
function render() {
  display.clear();

  menu.render();
  world.render();

};