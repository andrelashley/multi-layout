import { Header1Component } from './header1/header1.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Footer1Component } from './footer1/footer1.component';
import { TestComponent } from './testchild/test.component';
import { TestModule } from './testchild/test.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AltHeaderComponent } from './alt-header/alt-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Header1Component,
    Footer1Component,
    TestComponent,
    WelcomeComponent,
    NotFoundComponent,
    HomeComponent,
    AltHeaderComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'welcome', component: WelcomeComponent, children: [
          { path: '', component: Header1Component, outlet: 'header' }
        ]
      },
      {
        path: 'login', component: LoginComponent, children: [
          { path: '', component: AltHeaderComponent, outlet: 'header' }
        ]
      },
      { path: '**', component: NotFoundComponent }
    ]),
    BrowserModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
