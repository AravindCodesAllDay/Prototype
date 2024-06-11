import { Component } from '@angular/core';

import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  imports: [CarouselComponent],
})
export class HomepageComponent {}
