import {
  fakeAsync,
  inject,
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  ResponseOptions,
  HttpModule,
  XHRBackend,
  Response,
  RequestMethod,
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {SearchWiki} from './wikisearch.service';

const mockResponse = {
  "batchcomplete": "yes",
  "continue": {
    "sroffset": 10,
    "continue": "-||"
  },
  "query": {
    "searchinfo": {
      "totalhits": 36853
    },
    "search": [{
      "ns": 0,
      "title": "Stuff",
      "snippet": "<span></span>",
      "size": 1906,
      "wordcount": 204,
      "timestamp": "2016-06-10T17:25:36Z"
    }]
  }
};

describe('Wikipedia search service', () => {

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HttpModule],
  //     providers: [
  //       {
  //         provide: XHRBackend,
  //         useClass: MockBackend
  //       },
  //       SearchWiki
  //     ]
  //   });
  // });
  let backend: MockBackend;
  let service: SearchWiki;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                SearchWiki,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(SearchWiki);

  }));

  function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url) {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

  it('should return the list of forms from the server on success', () => {
        setupConnections(backend, {
            body: mockResponse,
            status: 200
        });

        service.search('Angular').subscribe((data) => {
            expect(data.batchcomplete).toBe('yes');
        });
    });

  /*it('should get search results', fakeAsync(
    inject([
      XHRBackend,
      SearchWiki
      ], (mockBackend: XHRBackend, searchWiki: SearchWiki) => {

        const expectedUrl = 'https://en.wikipedia.org/w/api.php?' +
        'action=query&list=search&srsearch=Angular';

        backend.connections.subscribe(
          (connection: MockConnection) => {
            expect(connection.request.method).toBe(RequestMethod.Get);
            expect(connection.request.url).toBe(expectedUrl);

            connection.mockRespond(new Response(
              new ResponseOptions({ body: mockResponse })
              ));
          });

        searchWiki.search('Angular')
        .subscribe(res => {
          expect(res).toEqual(mockResponse);
        });
      })
    ));*/

  // it('should set foo with a 1s delay', fakeAsync(
  //   inject([SearchWiki], (searchWiki: SearchWiki) => {
  //     searchWiki.setFoo('food');
  //     tick(1000);
  //     expect(searchWiki.foo).toEqual('food');
  //   })
  // ));

});