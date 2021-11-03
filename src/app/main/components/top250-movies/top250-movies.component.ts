import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';


@Component({
  selector: 'app-top250-movies',
  templateUrl: './top250-movies.component.html',
  styleUrls: ['./top250-movies.component.css']
})
export class Top250MoviesComponent implements OnInit {
  movies: Array<Movie> = [];
  
  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await this.mainService.getTop250Movies();
  }
}
