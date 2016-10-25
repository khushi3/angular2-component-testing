import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {Http, Headers} from '@angular/http';
@Injectable()
export class SearchWiki {
  constructor (private http: Http) {}

  search(): Observable<any> {
    return this.http.get(
      'http://172.16.103.53:8080/messenger/webapi/profiles/parthi'
    ).map((response) => response.json());
  }

  search2(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
      var profile =  {
         firstName: 'khushi',
        lastName: 'pandey',
        profileName: 'kkkk'
      };
    //alert(profile);
      return this.http.post('http://localhost:8080/messenger/webapi/profiles',profile, headers)
      .map((response ) => response);
  }

  // searchXML(term: string): Observable<any> {
  //   return this.http.get(
  //     'https://en.wikipedia.org/w/api.php?' +
  //     'action=query&list=search&format=xmlfm&srsearch=' + term
  //   );
  // }
}