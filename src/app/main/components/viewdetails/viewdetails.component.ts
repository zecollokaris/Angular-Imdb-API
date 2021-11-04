import { MainService } from "./../../services/main.service";
import { Result } from "./../../domain/result";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-viewdetails",
  templateUrl: "./viewdetails.component.html",
  styleUrls: ["./viewdetails.component.css"],
})
export class ViewdetailsComponent implements OnInit {
  result: Result;
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.result = await this.mainService.searchResultById(id);
  }
}
