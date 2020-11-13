import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { RegisterService } from '../../services/register.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let registerService: RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [RegisterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    registerService = TestBed.inject(RegisterService);
  });

  it('should set registerForm', () => {
    const regForm = {
      firstName: 'flip',
      email: 'flip@grid.com',
      password: '12345678',
    };
    expect(component.registerForm).toBeUndefined();
    spyOn(registerService, 'getForm').and.returnValue(regForm);
    fixture.detectChanges();
    expect(component.registerForm).toEqual(regForm);
  });
});
