var MovieObserver = (function () {					//defino el prototipo de movieObserber
  var playing = function (name) {
    console.log(name + ' is playing.');
  },
  stopped = function (name) {
    console.log(name + ' is stopped.')
    ;};
  nameChanged = function (name) {
    console.log ('Now, the new name is: ' + name)
  }
  return {
    playing: playing,
    stopped: stopped,
    nameChanged : nameChanged
  };
})();

var Movie = function (name) {	 	 	 	 	 
  this.name = name;
};

Movie.prototype.play = function () {
  MovieObserver.playing(this.name);
};

Movie.prototype.stop = function (){
	MovieObserver.stopped(this.name);
}

Movie.prototype.rename = function (name) {
  this.name = name;
  MovieObserver.nameChanged(this.name);
}

var movie = new Movie('Ratatouille');  //ratatouille pasa como str en el argumento
