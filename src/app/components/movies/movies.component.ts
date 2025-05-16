import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  imports: [FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  name: string = '';
  disc:  string = '';
  search: string = '';

  movies: { name: string, disc: string,img:string; isdeleted:  boolean}[] = [];
  constructor(){
    this.movies=[
      {
        name:"Kung Fu Panda 4",
        disc:"jdnskjfnjkdfndgjkngdjgdngdg",
        img:"https://www.dreamworks.com/storage/cms-uploads/kung-fu-panda-4-he-poster.jpg",
        isdeleted:  false
      },
      {
        name:"madagascar",
        disc:"jdnskjfnjkdfndgjkngdjgdngdg",
        img:"https://www.dreamworks.com/storage/movies/madagascar/posters/madagascar-poster-1.jpg",
        isdeleted:  false
      },
      {
        name:"Turbo",
        disc:"jdnskjfnjkdfndgjkngdjgdngdg",
        img:"https://www.dreamworks.com/storage/movies/turbo/posters/turbo-poster-1.jpg",
        isdeleted:  false
      },
      {
        name:"The Wild- Robot",
        disc:"jdnskjfnjkdfndgjkngdjgdngdg",
        img:"https://www.dreamworks.com/storage/cms-uploads/the-wild-robot-poster4.jpg",
        isdeleted:  false
      }
    ]
  }

  addMovie() {
    if (this.name && this.disc) {
      this.movies.push({ name: this.name, disc: this.disc,img:"2.png",isdeleted:false });
      this.name = '';
      this.disc = '';
    }
  }

  toggle(movieName: string) {
    const movie = this.movies.find(m => m.name === movieName);
    if (movie) {
      movie.isdeleted = true;
    }
  }

  get filteredMovies() {
    return this.movies.filter(movie =>
      movie.name.toLowerCase().includes(this.search.toLowerCase()) && !movie.isdeleted
    );
  }
}
