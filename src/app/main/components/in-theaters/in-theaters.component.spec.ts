import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheatersComponent } from './in-theaters.component';

import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';

describe('InTheatersComponent', () => {
  let component: InTheatersComponent;
  let fixture: ComponentFixture<InTheatersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InTheatersComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return in theaters', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getInTheaters").and.returnValue([ <Movie>{
      title: 'In Theaters'
    }]);

    await component.ngOnInit();    

    expect(component.movies.length).toEqual(1);

    expect(component.movies[0].title).toEqual('In Theaters');
  });

});
