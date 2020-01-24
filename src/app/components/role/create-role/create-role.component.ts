import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccessService } from 'src/app/shared/access.service';
import { RoleService } from 'src/app/shared/role.service';

export interface Subject {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  accessArray: any[] = [];
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetRoleForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  roleForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private accessApi: AccessService,
    private roleApi: RoleService
  ) { }

  ngOnInit() {
    this.accessApi.list().subscribe(res => {
      this.accessArray = res.data;
    });
    this.submitRoleForm();
  }

  // Reactive role form
  submitRoleForm() {
    this.roleForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['true', [Validators.required]],
      access:['', [Validators.required]]
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.roleForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitForm() {
    if (this.roleForm.valid) {
      this.roleApi.Create(this.roleForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/role/list'));
      });
    }
  }
}
