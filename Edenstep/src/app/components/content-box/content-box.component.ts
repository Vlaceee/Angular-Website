import { Component, input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { Input } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-content-box',
  imports: [NgClass],
  templateUrl: './content-box.component.html',
  styleUrl: './content-box.component.css',
})
export class ContentBoxComponent {
  @Input() imageUrl: string = ''; // Input for the image URL
  @Input() imageName: string = '';
  @Input() text1: string = '';
  @Input() text2: string = '';
  @Input() text3: string = '';
  @Input() reverseOrder: boolean = false;

  constructor() {
    console.log('it is made!');
  }

  ngOnInit(): void {
    // Log the input properties after the component is initialized
    console.log('imageUrl:', this.imageUrl);
    console.log('text1:', this.text1);
    console.log('text2:', this.text2);
    console.log('text3:', this.text3);
  }
}
