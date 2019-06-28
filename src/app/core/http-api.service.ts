import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpApiService {
  constructor(public httpClient: HttpClient) {}

  delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.httpClient.delete(endpoint, reqOpts)
  }

  get(endPoint: string): Observable<any> {
    return this.httpClient.get(endPoint);
  }

  post(endPoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.httpClient.post(endPoint, body, reqOpts)
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.httpClient.put(endpoint, body, reqOpts);
  }
}
