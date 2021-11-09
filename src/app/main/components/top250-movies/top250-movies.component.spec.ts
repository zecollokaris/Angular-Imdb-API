import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250MoviesComponent } from './top250-movies.component';


describe('Top250MoviesComponent', () => {
  let component: Top250MoviesComponent;
  let fixture: ComponentFixture<Top250MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top250MoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top250MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
