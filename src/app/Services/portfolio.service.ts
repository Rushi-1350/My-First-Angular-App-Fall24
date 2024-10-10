import { Injectable } from '@angular/core';
import { projects } from '../data/mockPortfolio.data';   
import { IContent } from '../models/content.model'; 
import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
    constructor() {}
    // method to get the projects from the mock data
    getProjects(): Observable<IContent[]> {
        // return an observable that emits the projects array
        return of(projects); 
    }
}