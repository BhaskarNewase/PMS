import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EditStudentComponent } from './components/user/edit-user/edit-user.component';
import { UserListComponent } from './components/user/list-user/user-list.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { LoginComponent } from './components/login/login.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateAccessComponent } from './components/access/create-access/create-access.component';
import { ListAccessComponent } from './components/access/list-access/list-access.component';
import { EditAccessComponent } from './components/access/edit-access/edit-access.component';
import { CreateRoleComponent } from './components/role/create-role/create-role.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { EditRoleComponent } from './components/role/edit-role/edit-role.component';
import { from } from 'rxjs';
//import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/login'},
  // User links
  { path: 'user/create', component: CreateUserComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'user/list', component: UserListComponent },
  // login links
  { path: 'user/login', component: LoginComponent },
  // Project links
  { path: 'project-list', component: ProjectsListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project', component: EditProjectComponent },
  { path: 'create-task', component: CreateTaskComponent },
  // Access links
  { path: 'access/create', component: CreateAccessComponent },
  { path: 'access/list', component: ListAccessComponent },
  { path: 'access/edit/:id', component: EditAccessComponent },
  // Role links
  { path: 'role/create', component: CreateRoleComponent },
  { path: 'role/list', component: ListRoleComponent },
  { path: 'role/edit', component: EditRoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})

export class AppRoutingModule { }
