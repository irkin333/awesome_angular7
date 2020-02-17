import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    isLoggedIn = true;

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

        if(this.isLoggedIn) {
            //...
        } else {
            this.authService.signUp(email, password).subscribe(
                (response) => {
                    console.log(response);
                    authForm.reset();
                }, (error) => {
                    console.log(error)
                });
        }
    }
  
    ngOnInit() {
        
    }
}
