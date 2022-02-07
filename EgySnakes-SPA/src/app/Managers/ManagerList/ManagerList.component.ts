import { Component, OnInit } from '@angular/core';
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

  constructor(private managerSerivce: ManagerService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadManagers();
  }
  loadManagers() {
    this.managerSerivce.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, error => {
      this.alertify.error(error);
    });
  }

}
