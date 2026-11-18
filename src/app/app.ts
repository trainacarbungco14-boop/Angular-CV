import { Component, signal } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Traina C. Carbungco';
  location = 'Angeles City, Pampanga';
  email = 'trainacarbungco14@gmail.com';
  phone = '0920 831 9972';

  profile = 'I am an Information Technology student specializing in Web Development. I am passionate about creating responsive and user-friendly websites while continuously improving my programming skills and exploring new technologies.';


  education = [
  {
    school: 'Holy Angel University',
    degree: 'Bachelor of Science in Information Technology',
    specialization: 'Major in Web Development',
    year: '2024 – 2028'
  }
];

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'MongoDB',
    'Figma',
    'Angular'
  ];

  proficiencies: Proficiency[] = [
   { tool: 'HTML and CSS', level: 'Intermediate' },
  { tool: 'JavaScript', level: 'Intermediate' },
  { tool: 'TypeScript', level: 'Beginner' },
  { tool: 'Angular', level: 'Beginner' },
  { tool: 'MongoDB', level: 'Beginner' },
  { tool: 'Git and GitHub', level: 'Intermediate' },
  { tool: 'Visual Studio Code', level: 'Advanced' },
  { tool: 'Figma', level: 'Intermediate' }
];

  interests = [
    'Web Development',
    'Exploring New Technologies',
    'Creative Designing',
    'Learning New Skills'
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
