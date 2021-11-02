import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-most-popular-tvs',
  templateUrl: './most-popular-tvs.component.html',
  styleUrls: ['./most-popular-tvs.component.css']
})
export class MostPopularTvsComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await this.mainService.getMostPopularTvs();
  }

}
