import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { HeaderComponent } from '../header/header.component';
import { DropdownDirective } from '../shared/dropdown.directive';

import { AuthComponent } from '../auth/auth.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

export const AppDeclarations = [
    HomeComponent,
    HeaderComponent,
    ErrorPageComponent,
    DropdownDirective,

    AuthComponent,
    LoaderComponent,
    PlaceholderDirective
];