import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SightseeingPoint} from '../models/sightseeing-point';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddService {


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }


  getObject(id: string): Observable<SightseeingPoint> {
    return this.http.get<SightseeingPoint>(`${environment.apiUrl}/sights/${id}`);
  }

  getObjects(): Observable<SightseeingPoint[]> {
    return this.http.get<SightseeingPoint[]>(`${environment.apiUrl}/sights`);
  }

  addObject(sight: SightseeingPoint): Observable<SightseeingPoint> {
    return this.http.post<SightseeingPoint>(`${environment.apiUrl}/sights/`, sight, this.httpOptions);
  }

  editObject(sight: SightseeingPoint,): Observable<any> {
    return this.http.put(`${environment.apiUrl}/sights`, sight, this.httpOptions);
  }


}


