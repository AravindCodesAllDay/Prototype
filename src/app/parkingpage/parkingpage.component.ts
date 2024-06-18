import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-parkingpage',
  standalone: true,
  templateUrl: './parkingpage.component.html',
  imports: [NavbarComponent, FooterComponent],
})
export class ParkingpageComponent {}
