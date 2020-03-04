import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../services/recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated: boolean = false;

  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipeService,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.userSubscription = this.authService.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
    // });

    this.userSubscription = this.store.select('auth').pipe(
      map(authState => authState.user)
    ).subscribe(user => {
      this.isAuthenticated = !!user;
    });;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onSaveRecipes() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    const recipes = this.recipesService.getRecipes();
    if(recipes.length === 0) {
      this.dataStorageService.fetchRecipes().subscribe();
    } else {
      return recipes;
    }
  }
  
  onLogout() {
    this.authService.logout();
  }
}
