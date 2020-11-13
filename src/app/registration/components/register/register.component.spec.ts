import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Element } from '@angular/compiler';
import { controlNames } from '../../constants/register.constants';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [FormBuilder, RegisterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', () => {
    const regForm = component.form;
    expect(regForm).toBeUndefined();
    fixture.detectChanges();
    expect(component.form).toBeDefined();
  });

  describe('onSubmit', () => {
    it('should focus on first error element if invalid', () => {
      const mockInput = {
        focus: () => {},
      };
      spyOn(document, 'getElementsByClassName').and.returnValue(<any>[
        {
          getElementsByTagName: () => [mockInput],
        },
      ]);
      const spy = spyOn(router, 'navigateByUrl');
      const focusSpy = spyOn(mockInput, 'focus');
      fixture.detectChanges();
      component.form.controls[controlNames.FIRSTNAME].setValue('');
      component.form.controls[controlNames.EMAIL].setValue('asd');
      component.form.controls[controlNames.PASSWORD].setValue('12345678');
      component.onSubmit();
      expect(spy).not.toHaveBeenCalled();
      expect(focusSpy).toHaveBeenCalled();
    });
    it('should save form data and navigate to welcome page', () => {
      const spy = spyOn(router, 'navigateByUrl');
      fixture.detectChanges();
      component.form.controls[controlNames.FIRSTNAME].setValue('flip');
      component.form.controls[controlNames.EMAIL].setValue('flip@grid.com');
      component.form.controls[controlNames.PASSWORD].setValue('12345678');
      component.onSubmit();
      expect(spy).toHaveBeenCalledWith('welcome');
    });
  });

  it('should set showError for controlName', () => {
    fixture.detectChanges();
    component.setShowError(controlNames.FIRSTNAME, false);
    expect(component.showError[controlNames.FIRSTNAME]).toBe(false);
    component.setShowError(controlNames.FIRSTNAME, true);
    expect(component.showError[controlNames.FIRSTNAME]).toBe(true);
  });
});
