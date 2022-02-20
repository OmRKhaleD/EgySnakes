/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityTownService } from './cityTown.service';

describe('Service: CityTown', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityTownService]
    });
  });

  it('should ...', inject([CityTownService], (service: CityTownService) => {
    expect(service).toBeTruthy();
  }));
});
