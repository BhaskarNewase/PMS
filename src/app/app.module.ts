import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { EditStudentComponent } from './components/user/edit-user/edit-user.component';
import { UserListComponent } from './components/user/list-user/user-list.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { LoginComponent } from './components/login/login.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
/* Access */
import { CreateAccessComponent } from './components/access/create-access/create-access.component';
import { ListAccessComponent } from './components/access/list-access/list-access.component';
import { EditAccessComponent } from './components/access/edit-access/edit-access.component';
/* Role */
import { CreateRoleComponent } from './components/role/create-role/create-role.component';
import { ListRoleComponent } from './components/role/list-role/list-role.component';
import { EditRoleComponent } from './components/role/edit-role/edit-role.component';


/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { UserService } from './shared/user.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditStudentComponent,
    UserListComponent,
    ProjectsListComponent,
    AddProjectComponent,
    EditProjectComponent,
    LoginComponent,
    CreateTaskComponent,
    CreateAccessComponent,
    ListAccessComponent,
    EditAccessComponent,
    CreateRoleComponent,
    ListRoleComponent,
    EditRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
