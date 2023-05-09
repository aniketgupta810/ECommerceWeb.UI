import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private apiUrl = 'http://localhost:3000/admin';
  constructor(private http: HttpClient) { }

  registerAdmin(adminData: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, adminData);
}
}