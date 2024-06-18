import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-applicationpage',
  standalone: true,
  templateUrl: './applicationpage.component.html',
  imports: [NavbarComponent, FooterComponent],
})
export class ApplicationpageComponent {}
