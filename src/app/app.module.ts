import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from './forms/forms.module';
import { UsersModule } from './users/users.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnswersModule } from './answers/answers.module';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    routing,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }