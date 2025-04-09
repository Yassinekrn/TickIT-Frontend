import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { PrimeNG } from 'primeng/config';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    ToggleButtonModule,
    ToggleSwitchModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  darkMode = false;
  constructor(private primeng: PrimeNG, private renderer: Renderer2) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    this.updateClass();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
    this.updateClass();
  }

  private updateClass() {
    const root = document.documentElement;
    if (this.darkMode) {
      this.renderer.addClass(root, 'app-dark');
    } else {
      this.renderer.removeClass(root, 'app-dark');
    }
  }
}
