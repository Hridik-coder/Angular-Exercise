import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgmarksComponent } from './avgmarks.component';

describe('AvgmarksComponent', () => {
  let component: AvgmarksComponent;
  let fixture: ComponentFixture<AvgmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgmarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
