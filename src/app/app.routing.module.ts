import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent, UserEditComponent } from './user-list/index';

// import { UserListComponent } from './user-list/user-list.component';
// import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const RoutesConfig: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'user',
    component: UserListComponent,
    children: [
      {
        path: 'edit',
        component: UserEditComponent
      }
    ]
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
