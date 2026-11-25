
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {

  // @if
  showProjects = true;

  // @for
  projects = [
    {
      name: 'Digify - Digital Advertising Hub',
      tech: 'React, Vite, Node.js, Express.js'
    },
    {
      name: 'Hain Na - Restaurant Menu, Ordering, and Reservation Web Application',
      tech: 'MongoDB, Express.js, Vue.js, Node.js'
    },
    {
      name: 'PaddleMatch - Web Application',
      tech: 'React, Vite, JavaScript, CSS'
    }
  ];

  // @switch
  selectedLevel = 'All';

  // Proficiencies (matching home.ts)
  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'HTML and CSS', level: 'Intermediate' },
    { tool: 'JavaScript', level: 'Intermediate' },
    { tool: 'TypeScript', level: 'Beginner' },
    { tool: 'Angular', level: 'Beginner' },
    { tool: 'MongoDB', level: 'Beginner' },
    { tool: 'Figma', level: 'Beginner' }
  ];

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }

    return this.proficiencies.filter(
      item => item.level === this.selectedLevel
    );
  }
}
