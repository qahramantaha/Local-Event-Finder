import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient:HttpClient) { }

  getEventData():Observable<any> {
    return this.httpClient.get('https://www.goabase.net/api/party/json/?limit=5');
  }


}
