import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailsComponent } from './viewdetails.component';

import { MainService } from './../../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../domain/movie';

describe('ViewdetailsComponent', () => {
  let component: ViewdetailsComponent;
  let fixture: ComponentFixture<ViewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdetailsComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return view details', async () => {  

    const service = fixture.debugElement.injector.get(MainService);

    // Returns an item  in an array when getTop250Movies is called
    spyOn(service,"searchResultById").and.returnValue([ <Movie>{
      title: 'Search Result'
    }]);

    await component.ngOnInit();    

    expect(component.result[0].title).toEqual('Search Result');
  });
});
