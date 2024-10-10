import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';  
import { IContent } from './models/content.model';
import { PortfolioService } from './Services/portfolio.service';
import { IContent } from './models/content.model';
// Imported PortfolioListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Projects';

  // definfing a single item 

  item: IContent = {
    title: 'Carousel',
    description: 'This is a carousel project',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    link: '#',
    completed: true
  };

}
