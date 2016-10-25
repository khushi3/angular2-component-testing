import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://172.16.103.53:8080/";
    public ApiUrl: string = "messenger/webapi/profiles/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}