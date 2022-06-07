import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { Character } from "../models/character.model";
import { CharactersService } from "../services/characters.service";

@Injectable()
export class CharactersGetAllResolver implements Resolve<Character[] | undefined> {

  constructor(private _service: CharactersService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Character[] | Observable<Character[] | undefined> | Promise<Character[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
