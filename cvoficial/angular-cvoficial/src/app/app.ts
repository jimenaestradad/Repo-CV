
import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { Header } from './features/header/header';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, About, Experience, Education, Skills],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnDestroy {
  private sub: Subscription;

  constructor(private router: Router) {
    this.sub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((ev: NavigationEnd) => {
      const url = ev.urlAfterRedirects || ev.url;
      const seg = (url.split('?')[0].split('#')[0] || '/').replace(/^\/+/,'');
      const focus = seg === '' || seg === 'about' ? '' : seg;
      this.applyFocus(focus);
    });
  }

  private applyFocus(sectionId: string) {
  
    if (typeof document === 'undefined' || typeof window === 'undefined') {
    
      return;
    }


    if (sectionId) {
      document.documentElement.setAttribute('data-focus', sectionId);
    } else {
      document.documentElement.removeAttribute('data-focus');
    }

    
    setTimeout(() => {
   
      if (typeof document === 'undefined') return;
      const el = sectionId ? document.getElementById(sectionId) : null;
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}