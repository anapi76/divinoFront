import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseDenominacion } from '../models/response.interfaceDenominacion';
import { ResponseBodega } from '../models/response.interfaceBodega';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  selectedId$: Observable<number | null> = this.selectedIdSubject.asObservable();
  
  constructor(public http: HttpClient) { }

  public getResponseDenominacion(url:string): Observable<ResponseDenominacion> {
    return this.http.get<ResponseDenominacion>(url);
  }

  public getResponseBodega(url:string): Observable<ResponseBodega> {
    return this.http.get<ResponseBodega>(url);
  }

  public getSelectedId(): Observable<number|null>{
    return this.selectedId$;
  }

  public setSelectedId(id: number): void {
    this.selectedIdSubject.next(id)
  }
  
}
