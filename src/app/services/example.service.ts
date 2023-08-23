import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Data = {
  text: string;
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Data> {
    return this.httpClient.get<Data>('api');
  }
}
