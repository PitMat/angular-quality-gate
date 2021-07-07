import {Injectable} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Country} from '../models/country';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  selectedSight: SightseeingPoint;

  constructor(private http: HttpClient, private router: Router) {
  }

  getSights(): Observable<SightseeingPoint[]> {
    return this.http.get<SightseeingPoint[]>(`${environment.apiUrl}/sights`).pipe(
      map(sights => {
        return sights.map(sight => {
          const country = new Country('POLAND', 'PL');

          return new SightseeingPoint(
            sight.id,
            sight.name,
            sight.longitude,
            sight.latitude,
            country,
            sight.description,
            sight.color
          );
        });
      }),
    );
  }
  delete(id: string): Observable<any>{
    return this.http.delete(`${environment.apiUrl}/sights/${id}`);
  }
}
