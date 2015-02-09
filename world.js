function World(map){
  this.colors = ['#007800', '#E8D754', '#132B75'];
  this.map    = map;
  this.height = 512;
  this.width  = 512;
};

World.prototype.init = function(){
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.ctx = this.canvas.getContext("2d");
};

World.prototype.getPos = function(y,x) {
  if(x >= this.map.length || x < 0){
    return false;
  }
  else if(y >= this.map[x].length || y < 0){
    return false;
  }
  return this.map[y][x];
};

World.prototype.update = function() {
  for(var i = 0; i < this.map.length; i++){
    for(var j = 0; j < this.map[i].length; j++){
      for(var k = 0; k < this.colors.length; k++){
        if(this.map[j][i] == k){
          this.ctx.fillStyle = this.colors[k];
          this.ctx.fillRect(i*32, j*32, 32, 32);
        }
      }
    }
  }
  player.render();
};

World.prototype.render = function() {
  display.ctx.drawImage(world.canvas, 0, 0);
};