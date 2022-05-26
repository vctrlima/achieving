import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {   // Temporary route
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  { path: 'auth', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
