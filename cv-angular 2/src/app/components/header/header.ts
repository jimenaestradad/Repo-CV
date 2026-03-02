import { Component } from '@angular/core';
import { UpperCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  greeting = '';
  firstName = 'Jimena';
  lastName = 'Estrada';
  title = 'Secretaria Bilingüe';

  constructor() {
    this.setGreeting();
  }

  setGreeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      this.greeting = 'Buenos días';
    } else if (hour >= 12 && hour < 19) {
      this.greeting = 'Buenas tardes';
    } else {
      this.greeting = 'Buenas noches';
    }
  }

  downloadCV() {
    alert('Descargando CV...');
  }

}