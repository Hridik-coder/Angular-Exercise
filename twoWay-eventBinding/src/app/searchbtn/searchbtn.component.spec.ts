import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbtnComponent } from './searchbtn.component';

describe('SearchbtnComponent', () => {
  let component: SearchbtnComponent;
  let fixture: ComponentFixture<SearchbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
