import { Access } from 'src/app/model/access';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AccessService } from 'src/app/shared/access.service';

@Component({
  selector: 'app-list-access',
  templateUrl: './list-access.component.html',
  styleUrls: ['./list-access.component.css']
})
export class ListAccessComponent implements OnInit {

  StudentData: any = [];
  dataSource: MatTableDataSource<Access>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'status', 'action'];

  constructor(private accessApi: AccessService) {
    this.accessApi.list().subscribe(data => {
      this.StudentData = data.data;
      this.dataSource = new MatTableDataSource<Access>(this.StudentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteStudent(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.accessApi.DeleteStudent(e._id).subscribe()
    }
  }

}
