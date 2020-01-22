import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccessService } from '../../../shared/access.service';

@Component({
  selector: 'app-create-access',
  templateUrl: './create-access.component.html',
  styleUrls: ['./create-access.component.css']
})
export class CreateAccessComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList', { static: true }) chipList;
  @ViewChild('resetAccessForm', { static: true }) myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  accessForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private accessApi: AccessService
  ) { }

  ngOnInit() {
    this.submitAccessForm();
  }

  // Reactive access form
  submitAccessForm() {
    this.accessForm = this.fb.group({
      name: ['', [Validators.required]],
      status: ['true', [Validators.required]]
    });
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.accessForm.controls[controlName].hasError(errorName);
  }

   /* Submit book */
   submitForm() {
    if (this.accessForm.valid) {
      this.accessApi.Create(this.accessForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/access/list'));
      });
    }
  }

}
