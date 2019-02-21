import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageContainnerComponent } from './message-containner/message-containner.component';
import { ParentMessageComponent } from './parent-message/parent-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageContainnerComponent,
    ParentMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
