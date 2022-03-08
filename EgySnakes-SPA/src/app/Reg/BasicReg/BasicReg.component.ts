import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { City } from 'src/app/_models/City';
import { Town } from 'src/app/_models/Town';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CityTownService } from 'src/app/_services/cityTown.service';

const userExistsAsyncValidator = (authService: AuthService) => (c: FormControl) => {
  return authService.userExists(String(c.value));
};

@Component({
  selector: 'app-BasicReg',
  templateUrl: './BasicReg.component.html',
  styleUrls: ['./BasicReg.component.css']
})
export class BasicRegComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  @Output() basic = new EventEmitter<any>();
  model: any = {};
  registerForm: FormGroup;
  cities: City[];
  towns: Town[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private cityTownService: CityTownService,
    private authService: AuthService, private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'YYYY-MM-DD'
    };
    this.loadCities();
    this.createRegisterForm();
  }

  updateCity() {
    const x = this.registerForm.get('cityId').value;
    if (x === '') {
      this.towns = null;
      this.registerForm.controls['town'].setValue('Select Town');
    } else {
      this.loadTowns(x);
    }
  }
  loadTowns(value: number) {
    this.cityTownService.getTowns(value).subscribe((town: Town[]) => {
      this.towns = town;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadCities() {
    this.cityTownService.getCities().subscribe((city: City[]) => {
      this.cities = city;
    }, error => {
      this.alertify.error(error);
    });
  }

  createRegisterForm () {
    this.registerForm = this.fb.group({
      username: new FormControl('', Validators.required, [userExistsAsyncValidator(this.authService)]),
      fullname: ['', Validators.required],
      cityId: ['', Validators.required],
      townId: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^((\\+20-?)|0)?[0-9]{11}$')]],
      nationalId: ['', [Validators.required, Validators.pattern('^[0-9]{14}$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required],
      gender: ['male'],
      dateOfBirth: [null, [Validators.required]],
    }, {validator: this.paswwordMatchValidator});
  }

  paswwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

  register() {
    /* this.authService.register(this.model).subscribe(() => {
       this.alertify.success('registration successful');
     }, error => {
       this.alertify.error(error);
     });*/
     this.basic.emit(this.registerForm.value);
   }
   cancel() {
     this.cancelRegister.emit(false);
   }
}
