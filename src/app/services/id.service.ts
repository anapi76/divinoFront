import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDenominacion } from '../models/response.interfaceDenominacion';
import { ResponseBodega } from '../models/response.interfaceBodega';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getResponseDenominacion(url:string): Observable<ResponseDenominacion> {
    return this.http.get<ResponseDenominacion>(url);
  }

  public getResponseBodega(url:string): Observable<ResponseBodega> {
    return this.http.get<ResponseBodega>(url);
  }
  
}
