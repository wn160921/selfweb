import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfInfoComponent } from './self-info/self-info.component';
import { ClassTeachComponent } from './class-teach/class-teach.component';
import { ResearchComponent } from './research/research.component';
import { EsaylifeComponent } from './esaylife/esaylife.component';
import { ClassListComponent } from './class-list/class-list.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SelfInfoComponent,
    ClassTeachComponent,
    ResearchComponent,
    EsaylifeComponent,
    ClassListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
