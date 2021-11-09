import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250TvsComponent } from './top250-tvs.component';

import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';

describe('Top250TvsComponent', () => {
  let component: Top250TvsComponent;
  let fixture: ComponentFixture<Top250TvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top250TvsComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top250TvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return top 250 tvs', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getTop250Movies").and.returnValue([ <Movie>{
      title: 'Top 250 Tv'
    }]);

    await component.ngOnInit();    

    expect(component.movies.length).toEqual(1);

    expect(component.movies[0].title).toEqual('Top 250 Tv');
  });
});
