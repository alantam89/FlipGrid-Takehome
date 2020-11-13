import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterService);
  });

  it('should get and set form', () => {
    let regForm = service.getForm();
    expect(regForm).toBeUndefined();
    service.saveForm({ firstName: 'flip' });
    regForm = service.getForm();
    expect(regForm).toBeDefined();
    expect(regForm.firstName).toEqual('flip');
  });
});
