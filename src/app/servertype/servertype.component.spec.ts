import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServertypeComponent } from './servertype.component';

describe('ServertypeComponent', () => {
  let component: ServertypeComponent;
  let fixture: ComponentFixture<ServertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
