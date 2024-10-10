import { Component } from '@angular/core';
import { IContent } from  '../models/content.model';
import { CommonModule } from '@angular/common'; 
import { PortfolioListItemComponent } from '../portfolio-list-item/portfolio-list-item.component';  
// Imported the ListItem component

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [CommonModule,PortfolioListItemComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.css'
})
export class PortfolioListComponent {
  
}
