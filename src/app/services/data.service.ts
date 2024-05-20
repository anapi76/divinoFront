import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseDenominacion } from '../models/response.interfaceDenominacion';
import { ResponseBodega } from '../models/response.interfaceBodega';
import { ResponseVino } from '../models/response.interfaceVino';
import { ResponseGeneral } from '../models/response.interfaceGeneral';
import { ResponseValoracion } from '../models/response.interfaceValoracion';
import { ResponsePuntuacion } from '../models/response.interfacePuntuacion';

const httpOptions={
  headers: new HttpHeaders({
    'Content-type':'aplication/json',}),
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private selectedIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  selectedId$: Observable<number | null> = this.selectedIdSubject.asObservable();
  
  private selectedTitleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  selectedTitle$: Observable<string | null> = this.selectedTitleSubject.asObservable();

  constructor(public http: HttpClient) { }

  public getResponseDenominacion(url:string): Observable<ResponseDenominacion> {
    return this.http.get<ResponseDenominacion>(url);
  }

  public getResponseBodega(url:string): Observable<ResponseBodega> {
    return this.http.get<ResponseBodega>(url);
  }

  public getResponseVino(url:string): Observable<ResponseVino> {
    return this.http.get<ResponseVino>(url);
  }

  public getResponsePuntuacion(url:string): Observable<ResponsePuntuacion> {
    return this.http.get<ResponsePuntuacion>(url);
  }

  public getResponseGeneral(url:string): Observable<ResponseGeneral> {
    return this.http.get<ResponseGeneral>(url);
  }

  public getSelectedId(): Observable<number|null>{
    return this.selectedId$;
  }

  public setSelectedId(id: number): void {
    this.selectedIdSubject.next(id);
  }

  public getSelectedTitle(): Observable<string|null>{
    return this.selectedTitle$;
  }

  public setSelectedTitle(title: string): void {
    this.selectedTitleSubject.next(title);
  }

  public setSelected(id: number,title:string): void {
    this.selectedIdSubject.next(id);
    this.selectedTitleSubject.next(title);
  }

  public createValoracion(url:string,valoracion:ResponseValoracion):Observable<ResponseValoracion> {
    return this.http.post<ResponseValoracion>(url, valoracion,httpOptions);
  }
  
}
