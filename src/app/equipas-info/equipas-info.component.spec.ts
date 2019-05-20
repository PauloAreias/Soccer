import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipasInfoComponent } from './equipas-info.component';

describe('EquipasInfoComponent', () => {
  let component: EquipasInfoComponent;
  let fixture: ComponentFixture<EquipasInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipasInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
