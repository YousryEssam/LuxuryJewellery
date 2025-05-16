import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-page',
  imports: [FormsModule],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent {
  movieName: string = '';
  movieDescription: string = '';
  movieRating: number = 0;
  movieImage: string = '';
  
  movies: Array<{ name: string; description: string; rating: number; image: string }> = [];

  addMovie() {
     if (!this.movieName || !this.movieDescription || !this.movieImage) return;

    this.movies.push({
      name: this.movieName,
      description: this.movieDescription,
      rating: this.movieRating,
      image: "img/"+ this.movieImage,
    });

    // Reset form
    this.movieName = '';
    this.movieDescription = '';
    this.movieRating = 0;
    this.movieImage = '';
  }
}
