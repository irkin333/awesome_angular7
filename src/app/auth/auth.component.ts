import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    isLoggedIn = true;
    loading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {

    }

    onSwithLoginSignUpMode () {
        this.isLoggedIn = !this.isLoggedIn;
    }

    onAuth(authForm) {
        if(!authForm.valid) {
            return
        }
        const email = authForm.value.email;
        const password = authForm.value.password;

        let authObs: Observable<AuthResponseData>;

        this.loading = true;
        if(this.isLoggedIn) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(
            (response) => {
                console.log(response);
                this.loading = false;
                authForm.reset();
                this.router.navigate(['/recipes'])
            }, (errorMessage) => {
                console.log(errorMessage)
                this.error = errorMessage;
                this.loading = false;
            });
    }
  
    ngOnInit() {
        
    }
}
