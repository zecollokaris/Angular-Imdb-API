import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { Route, RouterModule } from '@angular/router';


const routes:Array<Route> = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(module => module.MainModule),
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
