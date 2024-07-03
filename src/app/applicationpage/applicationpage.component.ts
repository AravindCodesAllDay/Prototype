import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { AppComponent } from './app/app.component';
import { FeaturesComponent } from './features/features.component';

@Component({
  selector: 'app-applicationpage',
  standalone: true,
  templateUrl: './applicationpage.component.html',
  imports: [NavbarComponent, FooterComponent, AppComponent, FeaturesComponent],
})
export class ApplicationpageComponent {}
