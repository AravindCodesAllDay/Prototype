import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { RecycleComponent } from './recycle/recycle.component';

@Component({
  selector: 'app-parkingpage',
  standalone: true,
  templateUrl: './parkingpage.component.html',
  imports: [
    NavbarComponent,
    FooterComponent,
    EcosystemComponent,
    RecycleComponent,
  ],
})
export class ParkingpageComponent {}
