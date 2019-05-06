import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipasComponent } from './equipas.component';

describe('EquipasComponent', () => {
  let component: EquipasComponent;
  let fixture: ComponentFixture<EquipasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
