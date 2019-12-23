import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaffairrequestsComponent } from './studentaffairrequests.component';

describe('StudentaffairrequestsComponent', () => {
  let component: StudentaffairrequestsComponent;
  let fixture: ComponentFixture<StudentaffairrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaffairrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaffairrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
