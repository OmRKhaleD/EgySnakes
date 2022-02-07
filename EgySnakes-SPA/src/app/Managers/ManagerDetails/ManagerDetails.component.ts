import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manager } from 'src/app/_models/Manager';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-ManagerDetails',
  templateUrl: './ManagerDetails.component.html',
  styleUrls: ['./ManagerDetails.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  manager: Manager;

  constructor(private managerService: ManagerService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadManager();
  }
  loadManager() {
    this.managerService.getManager(+this.route.snapshot.params['id']).subscribe((manager: Manager) => {
      this.manager = manager;
    }, error => {
      this.alertify.error(error);
    });
  }

}
