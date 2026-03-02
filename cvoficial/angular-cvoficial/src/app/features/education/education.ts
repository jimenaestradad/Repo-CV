import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CV } from '../../data/cvoficial-data';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  styleUrls: ['./education.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Education {

  cv = CV;
  tableHtml: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
    this.tableHtml = this.buildTable();
  }

  private buildTable(): SafeHtml {

    const items = Array.isArray(this.cv?.education) ? this.cv.education : [];

    let html = `
      <table class="edu-table" aria-describedby="edu-caption">
        <thead>
          <tr>
            <th scope="col">Año</th>
            <th scope="col">Institución</th>
            <th scope="col">Título obtenido</th>
          </tr>
        </thead>
        <tbody>
    `;

    for (const e of items) {
      html += `
        <tr>
          <td>${this.escape(e.year)}</td>
          <td>${this.escape(e.institution)}</td>
          <td>${this.escape(e.degree)}</td>
        </tr>
      `;
    }

    html += `
        </tbody>
      </table>
    `;

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private escape(value: any): string {
    if (!value) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

}