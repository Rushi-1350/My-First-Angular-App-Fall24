import { Injectable } from '@angular/core';
import { projects } from '../data/mockPortfolio.data';   
import { IContent } from '../models/content.model'; 
import { Observable, of } from 'rxjs'; 
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
    //Local copy of projects data for CRUD Operations
    private projects: IContent[] = projects;
    constructor() {}
    // method to get the projects from the mock data
    getProjects(): Observable<IContent[]> {
        // return an observable that emits the projects array
        return of(projects); 
    }
    // Adding basic CRUD methods
    // create add user
    addProject(projects: IContent): Observable<IContent[]> {
        this.projects.push(projects);
        return of(this.projects);
    }

    // Update an existing project
    updateProject(updatedProjects: IContent): Observable<IContent[]> {
        const index = this.projects.findIndex(project => project.title === updatedProjects.title);
        if (index !== -1) {
            this.projects[index] = updatedProjects;
        }
        return of(this.projects);
    }

    // Delete a project by ID
    deleteProject(title: string): Observable<IContent[]> {
        this.projects = this.projects.filter(project => project.title !== title);
        return of(this.projects);
    }
    getProject(title: string): Observable<IContent | undefined> {
        const project = this.projects.find(project => project.title === title);
        return of(project);
    }
}