import { Component, OnInit } from '@angular/core';
import { IContent } from  '../models/content.model';
import { CommonModule } from '@angular/common'; 
import { PortfolioListItemComponent } from '../portfolio-list-item/portfolio-list-item.component';  
import { PortfolioService } from '../Services/portfolio.service';
// Imported the ListItem component

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule,PortfolioListItemComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.css'
})
export class PortfolioListComponent implements OnInit {
  projects: IContent[] = [];
  constructor(private portfolioService: PortfolioService) { 
    //this constructor is primarily used for dependency injection
  }
  ngOnInit(): void {
    // This lifecycle hook to fetch and init our data
      this.portfolioService.getProjects().subscribe({
        next: (data: IContent[]) => this.projects = data,
      error:err => console.error("Error fetching Students", err),
     complete:() => console.log("Student data fetch complete!")
      })
  }
}
