import { Result } from "./../../domain/result";
import { MainService } from "./../../services/main.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  results: Array<Result> = [];
  searchTerm = "";

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {}

  async onSearchChange(searchTerm: string) {
    this.results = await this.mainService.searchMovie(searchTerm);
  }

  async selectResult(id: string) {
    this.router.navigate(["./ViewDetails", id]);
  }
}
