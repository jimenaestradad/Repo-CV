import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent implements OnInit {

  repos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getRepos().subscribe((data: any) => {
      this.repos = data.slice(0,3); // solo 3 proyectos
    });
  }

}