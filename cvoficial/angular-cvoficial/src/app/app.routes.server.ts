import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Experience } from './features/experience/experience'
import { Education } from './features/education/education';
import { Skills } from './features/skills/skills';
import { ProjectsComponent} from './features/projects/projects';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
  { path: 'skills', component: Skills },
  { path: 'projects',component: ProjectsComponent},
];