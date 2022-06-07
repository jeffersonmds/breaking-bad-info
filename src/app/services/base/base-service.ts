import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IBaseService } from "../interface/base/base-service.interface";

@Injectable({providedIn: 'root'})
export abstract class BaseService<TModel> implements IBaseService<TModel>{

    abstract path: string;

    constructor(protected _http: HttpClient) {
    }

    getAll(): Observable<TModel[]> {
        return this._http.get<TModel[]>(environment.apiUrl + this.path);
    }

    getById(id: number): Observable<TModel> {
        return this._http.get<TModel>(environment.apiUrl + this.path + `/${id}`);
    }
}
