import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllData (): Observable<any> {
    return this.http.get<any>(environment.baseUrl);
  }

  getSingleData (id: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + '/' + id);
  }

  createData (data: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl, data);
  }

  deleteData (id: any): Observable<any> {
    return this.http.delete<any>(environment.baseUrl + '/' + id);
  }

  updateData (data: any, id: any): Observable<any> {
    return this.http.put<any>(environment.baseUrl + '/' + id, data);
  }

}
