import { Component } from '@angular/core';
import { CV } from '../../data/cvoficial-data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  cv = CV;
}