import { Component } from '@angular/core';
import { Header } from './features/header/header';
import {About} from './features/about/about'
import {Experience} from './features/experience/experience'
import {Education} from './features/education/education';
import {Skills} from './features/skills/skills';
import { CV } from './data/cvoficial-data';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, About, Experience, Education, Skills],
  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  cv = CV;
}

export const App = AppComponent;