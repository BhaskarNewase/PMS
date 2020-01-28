import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../../shared/authentication.service';
import { User } from '../../model/user';
import { ProjectService } from './../../shared/project.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  currentUser: User;
  taskForm: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  constructor(public fb: FormBuilder, private projectApi: ProjectService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    //this.projectForm.value.userId = this.currentUser.user._id;
    this.projectApi.GetCurrentProjectsList(this.currentUser._id).subscribe(data => {
      //this.ProjectData = data;
      //this.dataSource = new MatTableDataSource<Project>(this.ProjectData);
      // setTimeout(() => {
      //   this.dataSource.paginator = this.paginator;
      // }, 0);

    })
  }

  ngOnInit() {
    this.submitTaskForm();
  }

  /* Reactive book form */
  submitTaskForm() {
    this.taskForm = this.fb.group({
      project: ['', [Validators.required]]

    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.taskForm.controls[controlName].hasError(errorName);
  }

}
