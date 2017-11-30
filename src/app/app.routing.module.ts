import { Routes, RouterModule } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent, UserEditComponent } from './user-list/index';

// import { UserListComponent } from './user-list/user-list.component';
// import { UserEditComponent } from './user-list/user-edit/user-edit.component';

const RoutesConfig: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'edit',
    component: UserEditComponent
  },
];
