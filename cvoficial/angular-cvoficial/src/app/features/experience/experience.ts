import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CV } from '../../data/cvoficial-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Experience {
  cv: any = CV;
  timelineHtml: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
<<<<<<< HEAD
    console.log('CV DATA (Experience):', this.cv);
=======
    console.log('CV DATA (Experience):', this.cv); // debug simple
>>>>>>> origin/dev
    this.timelineHtml = this.buildTimelineHtml();
  }

  private buildTimelineHtml(): SafeHtml {
    const items = Array.isArray(this.cv?.experience) ? this.cv.experience : [];
    let html = '<div class="timeline" role="list" aria-label="Línea de tiempo de experiencia">';

    for (const ex of items) {
      html += ''
        + '<article class="timeline-item" role="listitem" aria-expanded="false">'
        +   '<div class="marker" aria-hidden="true"></div>'
        +   '<div class="card">'
        +     '<div class="card-head">'
        +       '<div class="period">' + this.escapeHtml(ex?.period) + '</div>'
        +       '<div class="company">' + this.escapeHtml(ex?.company) + '</div>'
        +     '</div>'
        +     '<div class="card-main">'
        +       '<div class="role">' + this.escapeHtml(ex?.role) + '</div>'
        +     '</div>'
        +     '<div class="details">'
        +       '<ul>';

      const details = Array.isArray(ex?.details) ? ex.details : [];
      for (const d of details) {
        html += '<li>' + this.escapeHtml(d) + '</li>';
      }

      html += ''
        +       '</ul>'
<<<<<<< HEAD
        +     '</div>'
        +   '</div>' 
=======
        +     '</div>' // .details
        +   '</div>' // .card
>>>>>>> origin/dev
        + '</article>';
    }

    html += '</div>';
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private escapeHtml(value: any): string {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}