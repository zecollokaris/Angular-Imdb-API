import { Component, OnInit } from '@angular/core';
import { Movie } from '../../domain/movie';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.movies = await this.mainService.getComingSoon();
  }
}
