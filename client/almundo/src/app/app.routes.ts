import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './components/main/main.component';

const APP_ROUTES: Routes = [
  { path: 'Main', component: MainComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Main' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
