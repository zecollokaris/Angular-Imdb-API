import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularMoviesComponent } from './most-popular-movies.component';

describe('MostPopularMoviesComponent', () => {
  let component: MostPopularMoviesComponent;
  let fixture: ComponentFixture<MostPopularMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
