import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaffairComponent } from './studentaffair.component';

describe('StudentaffairComponent', () => {
  let component: StudentaffairComponent;
  let fixture: ComponentFixture<StudentaffairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaffairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaffairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
