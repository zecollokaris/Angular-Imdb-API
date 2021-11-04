import { Component, OnInit } from "@angular/core";
import { Movie } from "../../domain/movie";
import { MainService } from "../../services/main.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  comingmovies: Array<Movie> = [];
  topmovies: Array<Movie> = [];
  toptvs: Array<Movie> = [];
  popmovies: Array<Movie> = [];
  poptvs: Array<Movie> = [];
  intheaters: Array<Movie> = [];

  constructor(private mainService: MainService) {}

  async ngOnInit() {
    this.comingmovies = await this.mainService.getComingSoon();
    this.topmovies = await this.mainService.getTop250Movies();
    this.toptvs = await this.mainService.getTop250Tvs();
    this.popmovies = await this.mainService.getMostPopularMovies()
    this.poptvs = await this.mainService.getMostPopularTvs()
    this.intheaters = await this.mainService.getInTheaters()
  }
}
