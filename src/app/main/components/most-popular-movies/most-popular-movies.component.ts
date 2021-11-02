import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-most-popular-movies',
  templateUrl: './most-popular-movies.component.html',
  styleUrls: ['./most-popular-movies.component.css']
})
export class MostPopularMoviesComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await this.mainService.getMostPopularMovies();
  }

}
