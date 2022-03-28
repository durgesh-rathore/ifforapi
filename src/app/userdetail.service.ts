import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
// import { randomBytes } from 'crypto';
import { Observable } from 'rxjs';
@Injectable()


export class UserdetailService{
  postapiurl="https://jsonplaceholder.typicode.com/posts";
  constructor(private _https:HttpClient) { }
  getdetail(){
  // status1=false;
  return [{id:101,name:'durgesh'},
  {id:102,name:'lokesh'},

  {id:103,name:'mukesh'},
  {id:104,name:'nitesh'},
  {id:105,name:'prinsh'}];
  }
  getPostApi(){
return this._https.get(this.postapiurl);
  }
    
}
