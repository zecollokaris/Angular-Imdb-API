import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponent } from './coming-soon.component';

import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';

describe('ComingSoonComponent', () => {
  let component: ComingSoonComponent;
  let fixture: ComponentFixture<ComingSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return movies', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"getComingSoon").and.returnValue([ <Movie>{
      title: 'Comming Soon'
    }]);

    await component.ngOnInit();    

    expect(component.movies.length).toEqual(1);

    expect(component.movies[0].title).toEqual('Comming Soon');
  });


});
