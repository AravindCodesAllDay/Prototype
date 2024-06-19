import { Component } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TruckdetailsComponent } from './truckdetails/truckdetails.component';
import { ApplicationComponent } from './application/application.component';
import { InfocardsComponent } from './infocards/infocards.component';
import { NeonComponent } from '../components/neon/neon.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  imports: [
    CarouselComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TruckdetailsComponent,
    ApplicationComponent,
    InfocardsComponent,
    NeonComponent,
  ],
})
export class HomepageComponent {}
