import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DerseEkleComponent } from './derse-ekle.component';

describe('DerseEkleComponent', () => {
  let component: DerseEkleComponent;
  let fixture: ComponentFixture<DerseEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerseEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerseEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
