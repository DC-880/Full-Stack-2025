import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function PasswordValidation(control: AbstractControl) {
    if (control.value == "Password") {
        return {
            weakPassword: true
        }
    } return null;
}


export function forbiddenNameValidator(control: AbstractControl) {
    if (control.value == "bobby jones") {
        return {
            badName: true
        }
    } return null;
}

