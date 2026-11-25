
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Directives } from '../directives/directives';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer, Directives],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Personal Information
  fullName = 'Traina C. Carbungco';
  location = 'Angeles City, Pampanga';
  email = 'trainacarbungco14@gmail.com';
  phone = '0920 831 9972';

  // Profile
  profile = 'I am an Information Technology student majoring in Web Development at Holy Angel University. I enjoy exploring new technologies and building useful applications.';

  // Education
  education = [
    {
      school: 'Holy Angel University',
      degree: 'Bachelor of Science in Information Technology',
      specialization: 'Major in Web Development',
      year: 'Present'
    }
  ];

  // Skills
  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'MongoDB',
    'Angular',
    'Vue.js',
    'Node.js'
  ];

  // Interests
  interests = [
    'Web Development',
    'UI/UX Design',
    'Programming',
    'Database Management',
    'Learning New Technologies'
  ];

  // Proficiencies
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

  // Interaction
  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
