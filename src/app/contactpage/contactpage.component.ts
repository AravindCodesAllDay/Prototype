import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormComponent } from '../components/form/form.component';

@Component({
  selector: 'app-contactpage',
  standalone: true,
  templateUrl: './contactpage.component.html',
  imports: [NavbarComponent, FooterComponent, FormComponent],
})
export class ContactpageComponent {}
