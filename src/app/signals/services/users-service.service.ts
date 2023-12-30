import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById( id: number ): Observable<any>{
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map( response => response.data),
    )
  }


}
