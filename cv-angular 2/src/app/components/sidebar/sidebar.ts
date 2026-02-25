import { Component } from '@angular/core';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {

  constructor(public data: DataService) {}

}