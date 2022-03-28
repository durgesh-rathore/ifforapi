import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserdetailService } from './userdetail.service';
import { ApidataComponent } from './apidata/apidata.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    ApidataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserdetailService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
