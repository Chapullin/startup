/*
1. Create a Movie object:
Movie
-attributes : hashmap
+ play() 
+ stop()
+ set(attr:string, value)
+ get(attr:string)

2. Instantiate some of your favorite movies and play with them in the console.

KEY POINT!!!!!!!!!!!
3. Add a MovieObserver class that listens for "playing" and “stopped” events.
*/




var MovieObserver = (function () {					//defino el prototipo de movieObserber
  var playing = function (name) {console.log(name + ' is playing.');},
   stopped = function (name) {console.log(name + ' is stopped.');};
  return { playing: playing, stopped: stopped   };
})();

var Movie = function (name) {	 	 	 	 	 
  this.name = name;
  console.log('  1   ');
};
Movie.prototype.play = function () {
  MovieObserver.playing(this.name);
  console.log('  2  ');
};
Movie.prototype.stop = function (){
	MovieObserver.stopped(this.name);
  console.log('  3  ');
}
Movie.prototype.name = function (name) {
  this.name = name;
}

var movie = new Movie('Ratatouille');  //ratatouille pasa como str en el argumento
movie.play();