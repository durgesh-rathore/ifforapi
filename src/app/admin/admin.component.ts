import { Component, OnInit } from '@angular/core';
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userList;
  constructor( private user:UserdetailService){
    this.userList=user.getdetail();
   }

  ngOnInit(): void {
  }

}
