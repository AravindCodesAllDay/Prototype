import { Component } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormComponent } from '../components/form/form.component';
import { TruckdetailsComponent } from './truckdetails/truckdetails.component';
import { ApplicationComponent } from './application/application.component';
import { InfocardsComponent } from './infocards/infocards.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  imports: [
    CarouselComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    TruckdetailsComponent,
    ApplicationComponent,
    InfocardsComponent,
  ],
})
export class HomepageComponent {}
