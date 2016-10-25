import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {SearchWiki} from '../services/wikisearch.service';

@Component({
    selector: 'my-app',
     template: '<button type="button" class="btn btn-primary" (click)= search2()>Post</button>'
})
export class wikiComponent { 

  constructor(
        private _service:SearchWiki){}

  search2() {
        this._service.search2();
    }
    }


   



