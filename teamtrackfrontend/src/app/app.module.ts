import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user-service.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserIssuesComponent } from './user-issues/user-issues.component';
import { UserCommentsComponent } from './user-issues/user-comments-list/user-comments/user-comments.component';
import { UserCommentsListComponent } from './user-issues/user-comments-list/user-comments-list.component';
import { UserAddingCommentsComponent } from './user-issues/user-adding-comments/user-adding-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserIssuesComponent,
    UserCommentsComponent,
    UserCommentsListComponent,
    UserAddingCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
