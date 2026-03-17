import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private githubUrl = 'https://api.github.com/users/jimenaestradad/repos';

  constructor(private http: HttpClient) {}

  // Retornamos un array de cualquier objeto
  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.githubUrl);
  }
}