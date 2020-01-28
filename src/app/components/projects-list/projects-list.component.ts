import { Project } from './../../shared/project';
import { ProjectService } from './../../shared/project.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user';
import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  currentUser: User;
  ProjectData: any = [];
  dataSource: MatTableDataSource<Project>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'project_name', 'project_key', 'project_type', 'project_lead', 'project_category', 'project_url', 'action'];

  constructor(private projectApi: ProjectService, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    //this.projectForm.value.userId = this.currentUser.user._id;
    this.projectApi.GetCurrentProjectsList(this.currentUser._id).subscribe(data => {
      this.ProjectData = data;
      this.dataSource = new MatTableDataSource<Project>(this.ProjectData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() {
  }

  deleteProject(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.projectApi.DeleteProject(e._id).subscribe()
    }
  }

}
