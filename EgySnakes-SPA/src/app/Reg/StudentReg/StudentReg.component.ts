import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-StudentReg',
  templateUrl: './StudentReg.component.html',
  styleUrls: ['./StudentReg.component.css']
})
export class StudentRegComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @Output() student = new EventEmitter<any>();
  model: any = {};
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm () {
    this.registerForm = this.fb.group({
      university: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{1}$')]],
      collegeType: ['clinical', Validators.required],
    });
  }

  register() {
     this.student.emit(this.registerForm.value);
   }
   cancel() {
     this.cancelRegister.emit(false);
   }

}
