import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './services/main.service';
import { Top250MoviesComponent } from './components/top250-movies/top250-movies.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Route, RouterModule } from '@angular/router';
import { Top250TvsComponent } from './components/top250-tvs/top250-tvs.component';


const routes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children : [
      {
        path: 'top250',
        component: Top250MoviesComponent
      },
      {
        path: 'top250Tvs',
        component: Top250TvsComponent  
      },
      {
        path: '',
        redirectTo: 'top250',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  providers: [MainService],
  declarations: [Top250MoviesComponent, DashboardComponent, Top250TvsComponent]
})
export class MainModule { }
