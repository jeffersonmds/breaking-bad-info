import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { BaseService } from "src/app/services/base/base-service";

@Component({
  template: ''
})
export abstract class BaseListComponent<TModel, TService extends BaseService<TModel>> implements OnInit, OnDestroy {

  _service: TService;
  datasource!: TModel[];
  unsub$ = new Subject();
  debounce: Subject<string> = new Subject<string>();

  constructor(@Inject(BaseService) service: TService,
              protected _activatedRoute: ActivatedRoute) {
      this._service = service;
  }

  ngOnInit(): void {
    const dataSourceResolver = this._activatedRoute.snapshot.data['DatasourceResolver'];
      if (dataSourceResolver) {
        this.datasource = dataSourceResolver;
        this.initializeDatasource();
      }
  }

  initializeDatasource(): void {}

  ngOnDestroy(): void {
    this.unsub$.next(null);
    this.unsub$.complete();
    this.debounce.unsubscribe();
    this.destroyComponent()
  }

  destroyComponent(): void {}
}
