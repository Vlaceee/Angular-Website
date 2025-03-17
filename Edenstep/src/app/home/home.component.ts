import { Component } from '@angular/core';
import { ContentBoxComponent } from '../components/content-box/content-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ContentBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
