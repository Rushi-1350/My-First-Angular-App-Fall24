import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
// Importing the About interface
import { About } from './models/about.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Initializing an array with at least 6 instances
  aboutDetails: About[] = [
    {
      name: 'Rushi Patel',
      bio: 'A software developer with a curious mind to discover new technologies like blockchainand defi.',
      email: 'rushi.patel@gmail.com',
      location: 'Toronto, Canada',
      interests: ['Blockchain', 'Defi', 'Web3', 'Hicking']
    },
    {
      name: 'Joe Goldberg',
      bio: 'A passionate photographer with a love for capturing moments and telling stories through images.',
      email: 'joe.goldberg@gmail.com',
      location: 'New York, USA',
      interests: ['Photography', 'Travel', 'Music']
    },
    {
      name: 'Love Quinn',
      bio: 'Full-stack developer and tech enthusiast.',
      email: 'love.quinn@gmail.com',
      location: 'Los Angeles, USA',
      interests: ['Full-stack development', 'Tech enthusiast']
    },
    {
      name: 'George Peterson',
      bio: 'A data scientist with a keen interest in machine learning.',
      email: 'george.peterson@gmail.com',
      location: 'San Francisco, USA',
      interests: ['Data Science', 'Machine Learning', 'Data Visualization']
    }, 
    {
      name: 'Sabrina Carpenter',
      bio: 'A passionate musician and songwriter.',
      email: 'sabrina.carpenter@gmail.com',
      location: 'London, UK',
      interests: ['Music', 'Songwriting', 'Guitar']
    },
    {
      name: 'Selena Gomez',
      bio: 'A talented actress and singer.',
      email: 'selena.gomez@gmail.com',
      location: 'Los Angeles, USA',
      interests: ['Acting', 'Singer', 'Fashion']
    }
  ];
}

