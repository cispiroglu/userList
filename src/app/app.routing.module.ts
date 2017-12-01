import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent, UserEditComponent } from './user-list/index';

// import { UserListComponent } from './user-list/user-list.component';
// import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

//satfalarda login olunup olunmadığını canActive ile kontrol ediyoruz. Önceden hazırladığımız authGuarda implement ettiğimiz
//CanActive routing ile guard konuşmasını sağlar.

import { AuthGuard } from './guards/auth.guard';

const RoutesConfig: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'user',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'card',
    component: UserCardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  // route' ı bulamadığı ne zaman ne yapmalı ve nereye yönlendirmelidiri aşağıdaki biçimde tanımlıyoruz.
  {
    path: '**',
    redirectTo: '/notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(RoutesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutesComponents = [
  UserListComponent,
  UserEditComponent,
  UserCardComponent
];
