import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MainService } from "./services/main.service";
import { Top250MoviesComponent } from "./components/top250-movies/top250-movies.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { Route, RouterModule } from "@angular/router";
import { Top250TvsComponent } from "./components/top250-tvs/top250-tvs.component";
import { MostPopularMoviesComponent } from "./components/most-popular-movies/most-popular-movies.component";
import { MostPopularTvsComponent } from "./components/most-popular-tvs/most-popular-tvs.component";
import { InTheatersComponent } from "./components/in-theaters/in-theaters.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { ViewdetailsComponent } from "./components/viewdetails/viewdetails.component";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule } from "@angular/forms";

const routes: Route[] = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "top250",
    component: Top250MoviesComponent,
  },

  // Top 250 Tvs Path
  {
    path: "top250Tvs",
    component: Top250TvsComponent,
  },

  // Most Popular Movies Path
  {
    path: "MostPopMovies",
    component: MostPopularMoviesComponent,
  },

  // Most Popular Tvs Path
  {
    path: "MostPopTvs",
    component: MostPopularMoviesComponent,
  },

  // In Theaters Path
  {
    path: "InTheaters",
    component: InTheatersComponent,
  },

  // Comming Soon Path
  {
    path: "ComingSoon",
    component: ComingSoonComponent,
  },

  // View Detials Path
  {
    path: "ViewDetails/:id",
    component: ViewdetailsComponent,
  },

  // View Detials Path
  {
    path: "Search",
    component: SearchComponent,
  },

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MainService],
  declarations: [
    Top250MoviesComponent,
    DashboardComponent,
    Top250TvsComponent,
    MostPopularMoviesComponent,
    MostPopularTvsComponent,
    InTheatersComponent,
    ComingSoonComponent,
    ViewdetailsComponent,
    SearchComponent,
  ],
})
export class MainModule {}
