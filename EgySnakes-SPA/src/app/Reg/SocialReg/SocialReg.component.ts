import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-SocialReg',
  templateUrl: './SocialReg.component.html',
  styleUrls: ['./SocialReg.component.css']
})
export class SocialRegComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @Output() social = new EventEmitter<any>();
  model: any = {};
  registerForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm () {
    this.registerForm = this.fb.group({
      telegram: ['', [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{11}$')]],
      whatsapp: ['', [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]],
      twitter: ['', Validators.pattern('(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))')],
      facebook: ['', [Validators.required, Validators.pattern('(https:\/\/)((w{3}\.))(facebook\.com\/)(profile\.php\[?]id=)[0-9]{15}')]],
      instagram: ['', Validators.pattern('(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9_.]{1,30}\/?')],
    });
  }

  register() {
     this.social.emit(this.registerForm.value);
   }
   cancel() {
     this.cancelRegister.emit(false);
   }

}
