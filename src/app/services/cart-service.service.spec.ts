import { TestBed } from '@angular/core/testing';

import { CartServicesService } from './cart-service.service';

describe('CartServiceService', () => {
  let service: CartServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
