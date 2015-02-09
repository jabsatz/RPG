function Menu(skills, score){
  this.skills = skills;
  this.score  = score;
}

Menu.prototype.init = function() {
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.width = 512;
  this.canvas.height = this.height = 128;
  this.ctx = this.canvas.getContext("2d");

  this.ctx.fillStyle = 'black';
  this.ctx.fillRect(0, 0, this.width, this.height);

};

Menu.prototype.update = function() {
  for(var i = 1; i <= this.skills.length; i++){
    this.ctx.font = '12px serif';
    this.ctx.strokeText(i, 32*i + i*16 + 14, 16);
    this.ctx.strokeStyle = 'white';
    this.ctx.strokeRect(32*i + i*16, 32, 32, 32);
  }
};

Menu.prototype.render = function() {
  display.ctx.drawImage(menu.canvas, 0, 512);
}