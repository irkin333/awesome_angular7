import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
    isLoggedIn = true;
    loading = false;

    private alertSubscription: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver,
        private store: Store<fromApp.AppState>
        ) { }

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
            // this.store.dispatch(new AuthActions.LoginStart({
            //     email, password
            // }));
        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe(
            (response) => {
                this.loading = false;
                authForm.reset();
                this.router.navigate(['/recipes'])
            }, (errorMessage) => {
                this.showErrorAlert(errorMessage);
                this.loading = false;
            });
    }
  
    ngOnInit() { }

    ngOnDestroy() {
        if(this.alertSubscription) {
            this.alertSubscription.unsubscribe();
        }
    }

    private showErrorAlert(message: string) {
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainer = this.alertHost.viewContainerRef;
        hostViewContainer.clear();

        const alertComponentRef = hostViewContainer.createComponent(alertComponentFactory);
        alertComponentRef.instance.message = message;
        this.alertSubscription = alertComponentRef.instance.close.subscribe(() => {
            this.alertSubscription.unsubscribe();
            hostViewContainer.clear();
        });
    }
}