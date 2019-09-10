import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IStudent } from 'src/app/student';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const _url: string = "http://localhost:1200/students";
@Injectable({
  providedIn: 'root'
})

export class KathmandulistService {

  constructor(private _http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  getStudents(): Observable<IStudent[]> {
    return this._http.get<IStudent[]>(_url).pipe(
      tap(data => console.log('fetched data from student ')),
      catchError(this.handleError('getStudents', [])))
  }
  getStudent(id: number):Observable<IStudent>{
    const url4= `${_url}/${id}`;
    return this._http.get<IStudent>(url4).pipe(
      tap(_ => console.log(`displayed student with id: ${id} `)),
      catchError(this.handleError<IStudent>('getStudent'))
    );
  }

  addStudent(IStudent): Observable<IStudent> {
    return this._http.post<any>(_url, IStudent, httpOptions).pipe(
      tap(_std => console.log('added new student')),
      catchError(this.handleError<IStudent>('addStudent')));
  }

  updateStudent(id, IStudent): Observable<any> {
    const url1 = `${_url}/${id}`;
    return this._http.put<any>(url1, id, httpOptions).pipe(
      tap(_ => console.log(`updated student with id ${id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );

  }

  deleteStudent(id: number): Observable<IStudent> {
    const url = `${_url}/${id}`;
    return this._http.delete<IStudent>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted item with id : ${id}`)),
      catchError(this.handleError<IStudent>('deleteStudent'))
    )
  }
}
