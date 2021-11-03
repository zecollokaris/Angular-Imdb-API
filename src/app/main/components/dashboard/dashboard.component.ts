import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await 
    this.mainService.getComingSoon();
    // this.mainService.getTop250Movies();
    // this.mainService.getTop250Tvs();
    // this.mainService.getMostPopularMovies()
    // this.mainService.getMostPopularTvs()
    // this.mainService.getInTheaters()
  }

}
