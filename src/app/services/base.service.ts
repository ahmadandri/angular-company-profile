import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { GlobalVariable } from "src/environments/global";

@Injectable()
export class ApiService {

  private BASE_API = GlobalVariable.SERVER_URL.base_api;
  constructor(private _httpClient: HttpClient) { }

  public get(apiURL: string): Observable<any> {
    return this._httpClient.get(apiURL);
  }

  public getById(apiURL: string, id: any): Observable<any> {
    return this._httpClient.get(apiURL + '/' + id);
  }
}
