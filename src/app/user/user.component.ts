import { Component, OnInit } from '@angular/core';
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList;
  constructor(private user:UserdetailService) {
    this.userList=user.getdetail();
   }

  ngOnInit(): void {
  }

}
