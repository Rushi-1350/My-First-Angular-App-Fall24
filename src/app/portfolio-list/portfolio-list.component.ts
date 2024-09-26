import { Component } from '@angular/core';
import { IContent } from  '../models/content.model';

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.css'
})
export class PortfolioListComponent {
  projects: IContent[] = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my skills, projects, and contact information.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      link: 'https://github.com',
      completed: false
    },
    { 
      title: 'Banking System', 
      description: 'Made a Banking System with JavaFX',
      technologies: ['Java', 'JavaFX'],
      link: '#', 
      completed: true 
    },
    { 
      title: 'Blog Platform', 
      description: 'Personal blog built with Angular.', 
      technologies: ['Angular', 'Firebase'], link: '#', 
      completed: true 
    },
    { 
      title: 'Social Network', 
      description: 'Social media app.', technologies: ['React', 'MongoDB'], 
      link: '#', 
      completed: false 
    }
  ];
}
