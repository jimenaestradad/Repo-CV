import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CV } from '../../data/cvoficial-data';



interface SkillItem {
  name: string;
  category?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  cv = CV;

  searchTerm: string = '';
  sortAsc: boolean = true;

  skills: SkillItem[] = [];

  constructor() {
    const raw = Array.isArray(this.cv?.skills) ? this.cv.skills : [];
    this.skills = raw.map(s => (typeof s === 'string' ? { name: s } : { name: String(s) }));
    this.sortSkills();
  }

  sortSkills() {
    this.skills.sort((a, b) => {
      const A = a.name.toLowerCase();
      const B = b.name.toLowerCase();
      if (A === B) return 0;
      return this.sortAsc ? (A < B ? -1 : 1) : (A < B ? 1 : -1);
    });
  }

  toggleSort() {
    this.sortAsc = !this.sortAsc;
    this.sortSkills();
  }

  get filteredSkills(): SkillItem[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.skills;
    return this.skills.filter(s => s.name.toLowerCase().includes(q));
  }

  resultsLabel(): string {
    const count = this.filteredSkills.length;
    return `${count} resultado${count === 1 ? '' : 's'}${this.searchTerm ? ` para "${this.searchTerm}"` : ''}.`;
  }
}