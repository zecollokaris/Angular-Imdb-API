import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularTvsComponent } from './most-popular-tvs.component';

import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';


describe('MostPopularTvsComponent', () => {
  let component: MostPopularTvsComponent;
  let fixture: ComponentFixture<MostPopularTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularTvsComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return pop tv', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getMostPopularTvs").and.returnValue([ <Movie>{
      title: 'Most Popular Tv'
    }]);

    await component.ngOnInit();    

    expect(component.movies.length).toEqual(1);

    expect(component.movies[0].title).toEqual('Most Popular Tv');
  });
});
