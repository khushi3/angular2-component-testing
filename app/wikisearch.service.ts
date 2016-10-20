import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchWiki {
  constructor (private http: Http) {}

  search(): Observable<any> {
    return this.http.get(
      'http://172.16.103.53:8080/messenger/webapi/profiles/parthi'
    ).map((response) => response.json());
  }

  // searchXML(term: string): Observable<any> {
  //   return this.http.get(
  //     'https://en.wikipedia.org/w/api.php?' +
  //     'action=query&list=search&format=xmlfm&srsearch=' + term
  //   );
  // }
}