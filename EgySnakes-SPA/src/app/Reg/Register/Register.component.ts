import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  basicMode = false;
  assisstantMode = false;
  socialMode = false;
  educationMode = false;
  studentMode = false;
  graduatedMode = false;
  educationInf: any = {};
  assisstantInf: any = {};
  studentInf: any = {};
  graduatedInf: any = {};
  basicInf: any = {};
  SocailInf: any = {};
  regMode = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
    this.basicMode = true;
  }
  createRegisterForm () {
    this.registerForm = this.fb.group({
      job: [''],
      jobType: ['']
    });
  }

  assisstantToggle() {
    this.registerForm.controls['jobType'].setValue('');
    if (this.registerForm.get('job').value === 'assisstant') {
      this.assisstantMode = true;
      this.studentMode = false;
      this.graduatedMode = false;
    }
  }

  pharmacistToggle() {
    this.assisstantMode = false;
  }

  studentToggle() {
    if (this.registerForm.get('job').value === 'pharmacist') {
      this.studentMode = true;
      this.assisstantMode = false;
      this.graduatedMode = false;
    }
  }
  graduatedToggle() {
    if (this.registerForm.get('job').value === 'pharmacist') {
      this.studentMode = false;
      this.assisstantMode = false;
      this.graduatedMode = true;
    }
  }
  register() {
   /* this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
    }, error => {
      this.alertify.error(error);
    });*/
    const asd = Object.assign({}, this.basicInf, this.SocailInf, this.assisstantInf, this.studentInf, this.registerForm.value, this.graduatedInf);
    console.log(asd);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
  cancelRegisterMode(registerMode: boolean) {
    this.cancelRegister.emit(registerMode);
  }

  getBasicInf(basicInf: any) {
    this.basicInf = basicInf;
    this.basicMode = false;
    this.socialMode = true;
    console.log(this.basicInf);
  }

  getAssisstantInf(assisstantInf: any) {
    this.assisstantInf = assisstantInf;
    this.assisstantMode = false;
    this.educationMode = false;
    this.regMode = true;
    console.log(this.assisstantInf);
  }

  getStudentInf(studentInf: any) {
    this.studentInf = studentInf;
    this.studentMode = false;
    this.educationMode = false;
    this.regMode = true;
    console.log(this.studentInf);
  }

  getgraduatedInf(graduatedInf: any) {
    this.graduatedInf = graduatedInf;
    this.graduatedMode = false;
    this.educationMode = false;
    this.regMode = true;
    console.log(this.graduatedInf);
  }

  getSocailInf(socialInf: any) {
    this.SocailInf = socialInf;
    this.socialMode = false;
    this.educationMode = true;
    console.log(this.SocailInf);
  }
}
