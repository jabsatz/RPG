function Player(dir, x, y){
  this.dir              = dir;
  this.x                = x;
  this.y                = y;
  this.nonWalkableTiles = [2];
  //Movement Speed (TIENE QUE SER DIVISOR DE 32)
  this.ms               = 4;
};

Player.prototype.move = function(dir) {
  this.dir = dir;
  ms = this.ms;
  if(dir === 1){
    this.x -= ms;
  }
  if(dir === 2){
    this.y -= ms;
  }
  if(dir === 3){
    this.x += ms;
  }
  if(dir === 4){
    this.y += ms;
  }
};

Player.prototype.checkMap = function(dir) {
  var x = this.x/32;
  var y = this.y/32;
  if(dir === 1){
    return world.getPos(y, x-1);
  }
  if(dir === 2){
    return world.getPos(y-1, x);
  }
  if(dir === 3){
    return world.getPos(y, x+1);
  }
  if(dir === 4){
    return world.getPos(y+1, x);
  }
};

Player.prototype.checkWalkable = function(dir) {
  this.dir = dir;
  var x = this.x/32;
  var y = this.y/32;
  if(this.checkMap(dir) === false){
    return false;
  }
  for(var i = 0; i < this.nonWalkableTiles.length; i++){
    if(this.checkMap(dir) === this.nonWalkableTiles[i]){
      return false;
    }
  }
  return true;
};

Player.prototype.update = function() {
  if(this.x % 32 == 0 && this.y % 32 == 0){
    for(var i = 37; i <= 40; i++){
      if(input.isDown(i)){
        if(this.checkWalkable(i - 36)){
          this.move(i - 36);
        }
        else{
          bump.play();
        }
        break;
      }
    }
  }
  else{
    this.move(this.dir);
  }
};

Player.prototype.render = function() {
  var dir = this.dir;
  var x = this.x + 8;
  var y = this.y + 8;
  world.ctx.fillStyle = '#850000';
  world.ctx.fillRect(this.x, this.y, 32, 32);
  world.ctx.fillStyle = 'black';
  if(dir === 1){
    x -= 8;
  }
  if(dir === 2){
    y -= 8;
  }
  if(dir === 3){
    x += 8;
  }
  if(dir === 4){
    y += 8; 
  }
  world.ctx.fillRect(x, y, 16, 16);
};