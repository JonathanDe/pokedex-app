import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { LoginGuard } from './login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PokemonDetailsComponent } from './dashboard/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent},
  {path: 'logout', component: LoginFormComponent},
  {path: 'dashboard', component: DashboardHomeComponent, canActivate: [LoginGuard]},
  {path: 'profile', component: ProfileEditComponent, canActivate: [LoginGuard]},
  {path: 'pokemon', component: PokemonDetailsComponent, canActivate: [LoginGuard]},
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRouting { }
