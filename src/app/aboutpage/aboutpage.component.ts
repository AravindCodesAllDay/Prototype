import { Component } from '@angular/core';
import { StoryComponent } from './story/story.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  templateUrl: './aboutpage.component.html',
  imports: [StoryComponent, NavbarComponent, ProfileComponent, FooterComponent],
})
export class AboutpageComponent {}
