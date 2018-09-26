import {FormGroup} from '@angular/forms';

export function passConfirm(password: string, passwordConfirmation: string) {
  return (group: FormGroup): { [key: string]: any } => {
    const pass = group.controls[password];
    const passConf = group.controls[passwordConfirmation];

    if (pass.value !== passConf.value) {
      group.get(passwordConfirmation).setErrors({confpass: true});
    } else {
      return null;
    }
  };
}
