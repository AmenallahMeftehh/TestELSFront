import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  findDistinctEmployeesByCriteria(criteria: string): Observable<any> {
    return this.http.get(environment.url + '/employees/' + criteria);
  }
}
