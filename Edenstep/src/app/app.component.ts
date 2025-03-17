import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: '<app-header></app-header>  <router-outlet/>',
  styles: [
    `
      :host {
        display: flex;
        height: 100vh;
        width: 100vw;

        margin: 0px;
        padding: 0px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Edenstep';
}
