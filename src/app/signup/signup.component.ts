import { Component } from "@angular/core";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styles: [
        `
            input.ng-invalid{
                background-color: #faa;
            }
        `
    ]
})
export class SignupComponent
{
    onSignupSubmit(formObj)
    {
        console.log('form submitted', formObj);
        console.log(formObj.value);
        //formObj.setValue({username: '', password: '', email: ''});
        formObj.reset();
    }
}