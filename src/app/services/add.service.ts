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


  // getPoint(id: string): Observable<SightseeingPoint> {
  //   return this.http.get<SightseeingPoint>(`${environment.apiUrl}/sights/${id}`);
  // }

  getPoints(): Observable<SightseeingPoint[]> {
    return this.http.get<SightseeingPoint[]>(`${environment.apiUrl}/sights`);
  }

  addPoint(sight: SightseeingPoint): Observable<SightseeingPoint> {
    return this.http.post<SightseeingPoint>(`${environment.apiUrl}/sights/`, sight, this.httpOptions);
  }

  editPoint(sight: SightseeingPoint, id: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/sights/${id}`, sight, this.httpOptions);
  }
}


