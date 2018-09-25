import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {passConfirm} from '../../../utils/validation-tools';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = this.fb.group({
      login: ['', Validators.required, Validators.minLength(3)],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confpass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birth: [''],
      sex: [''],
      phone: ['', Validators.pattern(/[0-9]/)],
    },
    {validator: passConfirm('password', 'confpass')});
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.reactiveForm.controls[controlName];
    return control.invalid && control.touched;
  }

  onSubmit() {
    const controls = this.reactiveForm.controls;

    /** Проверяем форму на валидность */
    if (this.reactiveForm.invalid) {
      /** Если форма не валидна, то помечаем все контролы как touched*/
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      /** Прерываем выполнение метода*/
      return;
    }

    /** TODO: Обработка данных формы */
    console.log(this.reactiveForm.value);
  }

}
