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

  private observer!: IntersectionObserver;
  public isVisible: boolean = false; // To track visibility status

  constructor() {
    console.log('ContentBoxComponent is created!');
  }

  ngOnInit(): void {
    // Log the input properties after the component is initialized
    console.log('imageUrl:', this.imageUrl);
    console.log('text1:', this.text1);
    console.log('text2:', this.text2);
    console.log('text3:', this.text3);

    // Initialize IntersectionObserver
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set isVisible to true if more than 50% of the element is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            this.isVisible = true;
            console.log(`${this.imageName} is more than half visible`);
          } else {
            this.isVisible = false;
            console.log(`${this.imageName} is less than half visible`);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Start observing the current element
    const element = document.querySelector(`#content-div-${this.imageName}`); // Updated query selector
    if (element) {
      this.observer.observe(element);
    }
  }

  ngOnDestroy(): void {
    // Clean up observer when the component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
