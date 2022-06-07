import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { Episode } from "../models/episode.model";
import { EpisodesService } from "../services/episodes.service";

@Injectable()
export class EpisodesGetAllResolver implements Resolve<Episode[] | undefined> {

  constructor(private _service: EpisodesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Episode[] | Observable<Episode[] | undefined> | Promise<Episode[] | undefined> | undefined {
    return this._service.getAll().pipe(map(r => r));
  }
}
