import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterCreationPageComponent } from './character-creation-page/character-creation-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'character-creation', component: CharacterCreationPageComponent },
];
