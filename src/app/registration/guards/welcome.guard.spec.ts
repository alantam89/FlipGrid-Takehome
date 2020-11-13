import { TestBed } from '@angular/core/testing';

import { WelcomeGuard } from './welcome.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

describe('WelcomeGuard', () => {
  let guard: WelcomeGuard;
  let router: Router;
  let registerService: RegisterService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [RegisterService],
    });
    guard = TestBed.inject(WelcomeGuard);
    router = TestBed.inject(Router);
    registerService = TestBed.inject(RegisterService);
  });

  describe('fn: canActivate', () => {
    it('should return true', () => {
      spyOn(registerService, 'getForm').and.returnValue({ firstName: 'flip' });
      const result = guard.canActivate();
      expect(result).toBe(true);
    });
    it('should return navigate and return false', () => {
      spyOn(registerService, 'getForm').and.returnValue(undefined);
      let spy = spyOn(router, 'navigateByUrl');
      const result = guard.canActivate();
      expect(result).toBe(false);
      expect(spy).toHaveBeenCalledWith('register');
    });
  });
});
