import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { MyPComponent } from './components/my-p/my-p.component';

@NgModule({
  declarations: [
    AppComponent, // 0
    HeaderComponent, // 1
    SidebarComponent, // 2
    MainWrapperComponent, // 3
    MyPComponent, // 4
    // AnotherComponent1,
    // AnotherComponent2,
    // AnotherComponent3,
  ], // AppComponent pertenece a AppModule
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
