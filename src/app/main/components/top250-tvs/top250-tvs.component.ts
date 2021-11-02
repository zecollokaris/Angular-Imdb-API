import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-top250-tvs',
  templateUrl: './top250-tvs.component.html',
  styleUrls: ['./top250-tvs.component.css']
})
export class Top250TvsComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await this.mainService.getTop250Movies();
  }
}
