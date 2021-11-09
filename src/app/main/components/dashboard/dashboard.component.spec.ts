import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [MainService]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return top movies', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getTop250Movies").and.returnValue([ <Movie>{
      title: 'Sample Movie'
    }]);

    spyOn(service,"getComingSoon").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    spyOn(service,"getTop250Tvs").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    spyOn(service,"getMostPopularMovies").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    spyOn(service,"getMostPopularTvs").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    spyOn(service,"getInTheaters").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    await component.ngOnInit();    

    expect(component.topmovies.length).toEqual(1);

    expect(component.topmovies[0].title).toEqual('Sample Movie');

  });
});
