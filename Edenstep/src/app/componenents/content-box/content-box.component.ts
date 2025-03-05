import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  imports: [],
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css'
})
export class ContentBoxComponent {
 imageurl =input('');
  text1= input('');
  text2 = input('');
  text3 = input('');

}
