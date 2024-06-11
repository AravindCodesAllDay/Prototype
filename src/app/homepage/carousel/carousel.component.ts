import { Component } from '@angular/core';
import { Carousel, initTWE } from 'tw-elements';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  ngOnInit() {
    initTWE({ Carousel });
  }
}
