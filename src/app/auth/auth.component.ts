import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    isLoggedIn = true;
    loading = false;
    error: string = null;

    constructor(private authService: AuthService) {}

    onSwithLoginSignUpMode () {
        this.isLoggedIn = !this.isLoggedIn;
    }

    onAuth(authForm) {
        if(!authForm.valid) {
            return
        }
        const email = authForm.value.email;
        const password = authForm.value.password;

        this.loading = true;
        if(this.isLoggedIn) {
            //...
        } else {
            this.authService.signUp(email, password).subscribe(
                (response) => {
                    console.log(response);
                    this.loading = false;
                    authForm.reset();
                }, (errorMessage) => {
                    console.log(errorMessage)
                    this.error = errorMessage;
                    this.loading = false;
                });
        }
    }
  
    ngOnInit() {
        
    }
}
