import { Component } from '@angular/core';
import { ContentBoxComponent } from "../componenents/content-box/content-box.component";


@Component({
  selector: 'app-home',
  imports: [ContentBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
