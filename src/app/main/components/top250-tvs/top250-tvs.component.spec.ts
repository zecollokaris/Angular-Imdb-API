import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top250TvsComponent } from './top250-tvs.component';

describe('Top250TvsComponent', () => {
  let component: Top250TvsComponent;
  let fixture: ComponentFixture<Top250TvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top250TvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top250TvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
