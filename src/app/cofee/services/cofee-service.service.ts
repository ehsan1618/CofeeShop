import { Injectable } from '@angular/core';
import { AppConfiguration } from "read-appsettings-json";
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cofee } from '../Model/cofee';
import { map, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CofeeServiceService  {
  

  constructor(private http : HttpClient){ }



  fetchList():Observable<Cofee[]> {
    const url = AppConfiguration.Setting().cofeeListUrl+'?size='+AppConfiguration.Setting().pageSize;//+'&page='+AppConfiguration.Setting().page;
    
      return this.http.get<Cofee[]>(url).
          pipe(
             map((data: Cofee[]) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

      getCofeeById(id:any): Observable<Cofee> {
        const url = AppConfiguration.Setting().cofeeListUrl+"?"+id;
        return this.http.get<Cofee>(url).
          pipe(
             map((data: Cofee) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }
  
}

