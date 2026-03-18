import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header';
import { About } from '../../components/about/about';
import { SidebarComponent } from '../../components/sidebar/sidebar';
import { Experience } from '../../experience/experience';
import { Education } from '../../education/education';
import { Certifications} from '../../components/certifications/certifications';
import { References } from '../../references/references';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    About,
    SidebarComponent,
    Experience,
    Education,
    Certifications,
    References
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}