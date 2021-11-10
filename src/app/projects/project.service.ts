import { PortfolioElement } from './../shared/interfaces/portfolio-element';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  url = `assets/data/portfolio.json`;
  constructor(private http: HttpClient) {}

  getProjects(): Observable<PortfolioElement[]> {
    return this.http.get<PortfolioElement[]>(`${this.url}`).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getProject(id: number): Observable<PortfolioElement> {
    return this.getProjects().pipe(
      map(elements =>elements.filter(element => element.id === id)[0])
    );
  }
}
