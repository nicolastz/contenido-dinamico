import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ChildComponent } from './child/child.component';
import { SidenavService } from './sidenav.service';
import { SidenavPadreComponent } from './sidenav/sidenav-padre/sidenav-padre.component';
import { SidenavHijoComponent } from './sidenav/sidenav-hijo/sidenav-hijo.component';
import { SidenavsComponent } from './sidenavs/sidenavs.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SidenavPadreComponent,
    SidenavHijoComponent,
    SidenavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
