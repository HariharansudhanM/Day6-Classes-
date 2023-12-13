"use strict";

// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

let result = [];
class MovieCl {
  constructor(title, studio, rating = "PG") {
    (this.title = title), (this.studio = studio), (this.rating = rating);
  }
  getPG() {
    return this.rating;
  }
}

let Movie1 = new MovieCl("Casino Royale", "Eon Productions", "PG13");
let Movie2 = new MovieCl("Leo", "7Screens", "R");
let Movie3 = new MovieCl("Ayan", "Eon Productions");
console.log(Movie1);

function getResults(input) {
  input.forEach((element) => {
    result.push(element.getPG());
  });

  console.log(result);
}

getResults([Movie1, Movie2, Movie3]);

// Write a “person” class to hold all the details.
// write a class to calculate the uber price.
class PersonCl {
  constructor(name, place, id) {
    (this.name = name), (this.place = place), (this.id = id);
  }
  getUberPrice(km) {
    console.log(`the total fare is ${km * 20} Rupees only`);
  }
}

let person1 = new PersonCl("Hari", "Cuddalore", "15BEC093");
console.log(person1);

person1.getUberPrice(15);
