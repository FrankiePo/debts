import { TestBed, async, inject } from '@angular/core/testing';

import { IsLogedInGuard } from './is-loged-in.guard';

describe('IsLogedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsLogedInGuard]
    });
  });

  it('should ...', inject([IsLogedInGuard], (guard: IsLogedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
