// mockPortfolio.data.ts
// importing the interface

import { IContent } from "../models/content.model";

// created a mock data array of type IContent and export it so it can be used in other files.

export const projects: IContent[] = [
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