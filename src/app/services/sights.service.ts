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
      tap(console.log),
      map(result => result),
      map(sights => {
        return sights.map(sight => {
          const country = new Country();
          country.name = sight.country.name;
          country.iataCode = sight.country.iataCode;

          return new SightseeingPoint(
            sight.name,
            sight.longitude,
            sight.latitude,
            sight.description,
            sight.color
          );
        });
      }),
    );
  }

  updateSight(sight: SightseeingPoint, id: string): Observable<void> {
    return this.http.put<void>(`${environment.apiUrl}/sights/${id}`, sight);
  }


  addNewSight(sight: SightseeingPoint): Observable<void> {
    return this.http.post<void>(`${environment.apiUrl}/sights`, sight);
  }
}
