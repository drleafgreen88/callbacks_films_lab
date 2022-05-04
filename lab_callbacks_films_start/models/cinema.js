const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function (){
  const titleList = this.films.map((film) => {
    return film.title  
  })
  return titleList
}

Cinema.prototype.findFilmByTitle = function (title){
  // const index = this.cinema.indexOf(film)
  // const findFilmByTitle = this.films.map((film, index) => {
  //   return film.title[1]
  // })
  // return findFilmByTitle
  return this.films.find( (film) => {
    return film.title === title
  } )
}

Cinema.prototype.findFilmsByGenre = function (genre) {
  return this.films.find( (film) => {
    return film.genre === genre
  })
}

Cinema.prototype.findFilmsByYear = function (year) {
  return this.films.some( (film) => {
    return film.year === year;
  })
}
// Cinema.prototype.createList = function (filmList) {
//   const filmList = []

//   for (const film of this.filmList) {
//     if (film.title === title) {
//       filmList.push(film);
//     }
//   }

//   return filmList;
// }

module.exports = Cinema;


