import { Component } from '@angular/core';
import {SearchWiki} from './services/wikisearch.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
    selector: 'my-app',
     providers: [SearchWiki],
     template: '<button type="button" class="btn btn-primary" (click)= search2()>Post</button>'
})
export class AppComponent { 
 constructor(
        private _service:SearchWiki){}

  search2() {
        this._service.search2();
    }
    }



