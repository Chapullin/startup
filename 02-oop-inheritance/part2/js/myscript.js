/*
Create a DownloadableMovie that extends from Movie adding a download method. Here you will have to set the correct prototype to DownloadableMovie.
*/

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

Movie.prototype.download = function (name) {
  this.name = name;
  console.log('The ' + this.name + 'movie is download now...');
  }

// Define the download constructor
function Download (name) {

  Movie.call(this, name);
 // this.name = name;
};

// Create a download.prototype object that inherits from Movie.prototype.
Download.prototype = Object.create(Movie.prototype);

// Set the "constructor" property to refer to Download
Download.prototype.constructor = Download;

Download.prototype.download = function(name) {
  this.name = name;
  console.log('name: ' + name); //OK
  console.log('this.name: ' + this.name); //ok
  console.log('The ' + this.name + ' movie is Downloading now...'); //OK
};


var movie = new Movie('Ratatouille');  //ratatouille pasa como str en el argumento
console.log('movie.name: ' + movie.name); //OK

var dload = new Download('Terminator'); //lo creo
console.log('dload.name: '+ dload.name); //OK
//console.log('dload.download(dload.name): ' + dload.download(dload.name));



console.log(dload instanceof Download);  // true 
console.log(dload instanceof Movie); // true