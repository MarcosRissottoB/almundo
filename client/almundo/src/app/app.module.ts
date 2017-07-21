import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Routes
import { APP_ROUTING } from './app.routes';


//Service
import { HotelsService } from './service/hotels.service';
import { ImagesService } from './service/images.service';
import { Http } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/main/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    Http,
    HotelsService,
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
