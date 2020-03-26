import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllboxesactivityComponent } from './allboxesactivity.component';

describe('AllboxesactivityComponent', () => {
  let component: AllboxesactivityComponent;
  let fixture: ComponentFixture<AllboxesactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllboxesactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllboxesactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
