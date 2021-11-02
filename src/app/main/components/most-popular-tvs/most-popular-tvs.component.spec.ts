import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularTvsComponent } from './most-popular-tvs.component';

describe('MostPopularTvsComponent', () => {
  let component: MostPopularTvsComponent;
  let fixture: ComponentFixture<MostPopularTvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPopularTvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
