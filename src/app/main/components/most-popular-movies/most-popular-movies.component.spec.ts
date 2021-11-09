import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularMoviesComponent } from './most-popular-movies.component';


import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';


describe('MostPopularMoviesComponent', () => {
  let component: MostPopularMoviesComponent;
  let fixture: ComponentFixture<MostPopularMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularMoviesComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return pop movies', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getMostPopularMovies").and.returnValue([ <Movie>{
      title: 'Most Popular Movies'
    }]);

    await component.ngOnInit();    

    expect(component.movies.length).toEqual(1);

    expect(component.movies[0].title).toEqual('Most Popular Movies');
  });

});
