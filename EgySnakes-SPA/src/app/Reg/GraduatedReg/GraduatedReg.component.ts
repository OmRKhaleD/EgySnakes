import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-GraduatedReg',
  templateUrl: './GraduatedReg.component.html',
  styleUrls: ['./GraduatedReg.component.css']
})
export class GraduatedRegComponent implements OnInit {
  
  @Output() cancelRegister = new EventEmitter();
  @Output() graduated = new EventEmitter<any>();
  model: any = {};
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.createRegisterForm();
  }

  
  createRegisterForm () {
    this.registerForm = this.fb.group({
      university: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      collegeType: ['clinical', Validators.required],
      jobType: ['private', Validators.required],
    });
  }

  register() {
     this.graduated.emit(this.registerForm.value);
   }
   cancel() {
     this.cancelRegister.emit(false);
   }

}
