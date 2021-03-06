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
import { FilterComponent } from './components/filter/filter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { CarouselComponent } from './components/main/carousel/carousel.component';
import { NavbarSecondaryComponent } from './components/shared/navbar-secondary/navbar-secondary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterComponent,
    SidebarComponent,
    MainComponent,
    CarouselComponent,
    NavbarSecondaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HotelsService,
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
