import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from '../../_models/Manager';
import { User } from '../../_models/User';
import { AlertifyService } from '../../_services/alertify.service';
import { ManagerService } from '../../_services/manager.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-ManagerList',
  templateUrl: './ManagerList.component.html',
  styleUrls: ['./ManagerList.component.css']
})
export class ManagerListComponent implements OnInit {
managers: Manager[];

  constructor(private managerSerivce: ManagerService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.managers = data['managers'];
    });
    console.log(this.managers);
  }
  /*loadManagers() {
    this.managerSerivce.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, error => {
      this.alertify.error(error);
    });
  }*/

}
