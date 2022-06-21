import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errorMessage: any;
  successMessage: any;
  paramId: any;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get('id');
    if (this.paramId) {
      this.api.getSingleData(this.paramId).subscribe(res => {
        this.userForm.patchValue(
          {
            fullname: res.data[0].fullname,
            email: res.data[0].email,
            mobile: res.data[0].mobile,
          }
        );
      });
    }
  }

  userForm = new FormGroup(
  {
    'fullname': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'mobile': new FormControl('', Validators.required),
  }
  );

  submitUser () {
    if (this.userForm.valid) {
      this.api.createData(this.userForm.value).subscribe(res => {
        this.userForm.reset();
        this.successMessage = res.message;
      });
    }
    else {
      this.errorMessage = 'all field is required';
    }
  }

  updateUser () {
    if (this.userForm.valid) {
      this.api.updateData(this.userForm.value, this.paramId).subscribe(res => {
        this.successMessage = res.message;
      });
    }
    else {
      this.errorMessage = 'all fields is required';
    }
  }

}
