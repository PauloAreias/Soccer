import { TestBed } from '@angular/core/testing';

import { EquipasService } from './equipas.service';

describe('EquipasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipasService = TestBed.get(EquipasService);
    expect(service).toBeTruthy();
  });
});
