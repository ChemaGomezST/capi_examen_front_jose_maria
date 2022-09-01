import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string;

  public onSuccessLogin = new EventEmitter();
  constructor(public _http: HttpClient) {
    this.url = environment.url;
  }
  public getUsers(): Observable<any> {
    return this._http.get(this.url + 'users');
  }
}
