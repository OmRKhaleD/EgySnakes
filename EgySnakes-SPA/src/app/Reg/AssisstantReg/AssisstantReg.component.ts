import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-AssisstantReg',
  templateUrl: './AssisstantReg.component.html',
  styleUrls: ['./AssisstantReg.component.css']
})
export class AssisstantRegComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @Output() assisstant = new EventEmitter<any>();
  model: any = {};
  registerForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm () {
    this.registerForm = this.fb.group({
      qualification: ['', Validators.required],
      year: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      type: ['high', Validators.required],
    });
  }

  register() {
     this.assisstant.emit(this.registerForm.value);
   }
   cancel() {
     this.cancelRegister.emit(false);
   }

}
