if (GT === null || typeof(GT) != "object") { var GT = new Object();}

GT.UI = function() {};
GT.UI.prototype.initialize = function(){
  GT.UI.Alert.initialize();
  this.Prompt.initialize();
  this.Menu.initialize();
  this.Board.initialize();
  this.ScoreBoard.initialize();
};

GT.UI.prototype.reset = function(){
  this.Alert.reset();
  this.Prompt.reset();
  this.Board.reset();
  this.ScoreBoard.reset();
};

GT.UI.prototype.resize = function(){
  this.Menu.initialize();
  this.Board.initialize();
  this.ScoreBoard.initialize();
};

GT.UI.prototype.update = function(){
  this.Board.update();
  this.ScoreBoard.update();
  this.Alert.update();
};
