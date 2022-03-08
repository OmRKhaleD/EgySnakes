import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { FindValueOperator } from 'rxjs/internal/operators/find';
import { City } from 'src/app/_models/City';
import { Manager } from 'src/app/_models/Manager';
import { Town } from 'src/app/_models/Town';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { CityTownService } from 'src/app/_services/cityTown.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-ManagerEdit',
  templateUrl: './ManagerEdit.component.html',
  styleUrls: ['./ManagerEdit.component.css']
})
export class ManagerEditComponent implements OnInit {
  @ViewChild('editForm1') editForm1: NgForm;
  @ViewChild('edit2form') edit2form: NgForm;
  @ViewChild('edit3form') edit3form: NgForm;
  @HostListener('window:beforeunload', ['$event'])
  user: User;
  cities: City[];
  towns: Town[];
  x: number;
  y: number;
  photoUrl: string;
  bsConfig: Partial<BsDatepickerConfig>;
  unloadnotification($event: any) {
    if (this.editForm1.dirty || this.edit2form.dirty || this.edit3form.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private cityTownService: CityTownService, private alertify: AlertifyService,
    private userService: UserService, private authService: AuthService) { }
  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-blue',
      dateInputFormat: 'YYYY-MM-DD'
    };
    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.cities = data['cities'];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  updateCity() {
    this.loadTowns(this.user.city.id);
  }
  updateCityM() {
    this.loadTowns(this.user.managers.city.id);
  }
  loadTowns(value: number) {
    this.cityTownService.getTowns(value).subscribe((town: Town[]) => {
      this.towns = town;
    }, error => {
      this.alertify.error(error);
    });
  }
  updateUser() {
    this.user.cityId = this.user.city.id;
    this.user.townId = this.user.town.id;
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      console.log(this.user);
      this.alertify.success('Profile updated Successfuly');
    }, error => {
      this.alertify.error(error);
    });

  }
  updateSocial() {
    this.userService.updateSocial(this.authService.decodedToken.nameid, this.user.socialLinks).subscribe(next => {
      console.log(this.user.socialLinks);
      this.alertify.success('Profile updated Successfuly');
    }, error => {
      this.alertify.error(error);
    });
  }
  updateManager() {
    this.user.managers.cityId = this.user.managers.city.id;
    this.user.managers.townId = this.user.managers.town.id;
    this.userService.updateManager(this.authService.decodedToken.nameid, this.user.managers).subscribe(next => {
      console.log(this.user.managers);
      this.alertify.success('Profile updated Successfuly');
    }, error => {
      this.alertify.error(error);
    });

  }
}
