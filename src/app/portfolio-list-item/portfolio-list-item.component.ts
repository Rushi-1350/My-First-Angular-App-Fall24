import { Component, Input } from '@angular/core';
import { IContent } from '../models/content.model';

@Component({
  selector: 'app-portfolio-list-item',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-list-item.component.html',
  styleUrl: './portfolio-list-item.component.css'
})
export class PortfolioListItemComponent {
  // Using @Input() to bind project data
  @Input() projects!: IContent;
}
