import { Component, ViewChild, OnInit } from '@angular/core';
import { Role } from 'src/app/model/role';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RoleService } from 'src/app/shared/role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  RoleData: any = [];
  dataSource: MatTableDataSource<Role>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'status', 'access', 'action'];

  constructor(private accessApi: RoleService) {
    this.accessApi.GetRole().subscribe(data => {
      this.RoleData = data.data;
      this.dataSource = new MatTableDataSource<Role>(this.RoleData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() {
  }

  deleteRole(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.accessApi.DeleteRole(e._id).subscribe()
    }
  }

}
