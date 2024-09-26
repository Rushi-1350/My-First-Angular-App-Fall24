import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';  
// Imported PortfolioListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

