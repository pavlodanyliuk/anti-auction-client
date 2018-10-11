import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {passConfirm} from '../../../utils/validation-tools';
import {User} from '../../../models/user';
import {emptyString2Undefined} from '../../../utils/transformation-tools';
import {ToastService} from '../../../services/toast/toast.service';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  reactiveForm: FormGroup;
  
  loading = false;
  error = false;

  constructor( private fb: FormBuilder,
               private userService: UserService,
               private toastService: ToastService
               ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = this.fb.group({
      login: ['', [ Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]*$'),
        Validators.minLength(3),
        Validators.maxLength(30) ]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', [ Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)*$'),
        Validators.minLength(6),
        Validators.maxLength(30) ]],
      confirmpass: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birth: [''],
      sex: [''],
      phone: ['', Validators.pattern(/[0-9]/)],
    },
    {validator: passConfirm('password', 'confirmpass')});
  }

  onSubmit() {
    this.loading = true;
    this.error = false;
    
    const controls = this.reactiveForm.controls;
    if (this.reactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    const user = this.transformToUser();

    console.log(user);

    this.userService.register(user).subscribe(
      response => {
        this.loading = false;
        this.toastService.success('Account registered successfully');
      }/*,
      error => {
        console.log(error);
        this.error = true;
        this.loading = false;
      }*/
    );

  }

  isControlInvalid(controlName: string): boolean {
    const control = this.reactiveForm.controls[controlName];
    return control.invalid && control.touched;
  }

  private transformToUser(): User {

    const user = new User();


    user.login = this.reactiveForm.controls['login'].value;
    user.email = this.reactiveForm.controls['email'].value;
    user.name = this.reactiveForm.controls['name'].value;
    user.surname = this.reactiveForm.controls['surname'].value;
    user.birth = this.reactiveForm.controls['birth'].value;
    user.password = this.reactiveForm.controls['password'].value;
    user.phone = this.reactiveForm.controls['phone'].value;

    const sex: string = this.reactiveForm.controls['sex'].value;

    if ( sex === 'male' ) {
      user.sex = true;
    } else if ( sex === 'female' ) {
      user.sex = false;
    }


    return user;
  }



}
