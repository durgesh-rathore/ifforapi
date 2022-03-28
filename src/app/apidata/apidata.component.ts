import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  datalist : any;
  
  
  constructor(private data:UserdetailService) {
    this.data.getPostApi().subscribe(dataa=>{
      this.datalist=dataa;
    });
   }
 
   

  ngOnInit(): void {
  }

}
