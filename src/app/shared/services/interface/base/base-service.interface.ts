import { Observable } from "rxjs";

export interface IBaseService<TModel> {
    getAll() : Observable<TModel[]>;
    getById(id: number) : Observable<TModel>;
}
