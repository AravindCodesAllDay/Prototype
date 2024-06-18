import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isScroll = signal<boolean>(true);

  private router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScroll.set(window.scrollY <= 100);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
