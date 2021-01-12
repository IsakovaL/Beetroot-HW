"use strict";

function onClickHandler() {
  var filmName = $("#movie-name").val();
  var filmType = $("#movie-type").children("option:selected").val();
  var url = "http://www.omdbapi.com/?apikey=e5d14904&s=" + filmName + "&type=" + filmType;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      debugger;
      var resp = JSON.parse(this.responseText);
      debugger;

      if (resp.totalResults == 0) {
        alert("no movies");
        return;
      }

      var filmsList = resp.Search;
    }
  };

  xhttp.open("GET", url, true);
  xhttp.send();
}

function renderFilms(arr) {} //"{"Search":[{"Title":"Friends","Year":"1994–2004","imdbID":"tt0108778","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
// {"Title":"Foster's Home for Imaginary Friends","Year":"2004–2009","imdbID":"tt0419326","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BNjYyNGFjOTctYzFmNC00NzdmLThhMDgtNjEzZTRmNzA3ODc5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg"},
// {"Title":"Friends from College","Year":"2017–","imdbID":"tt5565334","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNjgxNDc3MV5BMl5BanBnXkFtZTgwNDUyMzQ2NjM@._V1_SX300.jpg"},
// {"Title":"Happy Tree Friends","Year":"2000–","imdbID":"tt0770762","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BMzRiMjRkNDYtNjNmZC00MTQwLThjNGQtZDEzZDA0OWVlOWUxXkEyXkFqcGdeQXVyMjAxODI1Nzk@._V1_SX300.jpg"},
// {"Title":"Garfield and Friends","Year":"1988–1995","imdbID":"tt0094469","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BMjE1NDQwODgxMF5BMl5BanBnXkFtZTcwNzEzMjYyMQ@@._V1_SX300.jpg"},
// {"Title":"Friends with Better Lives","Year":"2014","imdbID":"tt2742174","Type":"series",
// "Poster":"https://m.media-amazon.com/images/M/MV5BMjAyNDA4OTk2NF5BMl5BanBnXkFtZTgwNzczNjc2MTE@._V1_SX300.jpg"},
//}],"totalResults":"358","Response":"True"}"