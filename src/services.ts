import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import { LocalForageItem } from './models';
import { LocalForageToken } from './tokens';


@Injectable()
export class LocalForageService {

    constructor(@Inject(LocalForageToken) private localForage: any ) {
    }

    getItem(key: string): Observable<any> {
        let promise = this.localForage.getItem(key);

        return Observable.fromPromise(promise);
    }

    setItem(item: LocalForageItem): Observable<any> {
        let promise = this.localForage.setItem(item.key, item.value);

        return Observable.fromPromise(promise);
    }

    removeItem(key: string): Observable<any> {
        let promise = this.localForage.removeItem(key);

        return Observable.fromPromise(promise);
    }

    clear(): Observable<any> {
        let promise = this.localForage.clear();

        return Observable.fromPromise(promise);
    }

    length(): Observable<number> {
        let promise = this.localForage.length();

        return Observable.fromPromise(promise);
    }

    key(index: number): Observable<string> {
        let promise = this.localForage.key(index);

        return Observable.fromPromise(promise);
    }

    keys(): Observable<string[]> {
        let promise = this.localForage.keys();

        return Observable.fromPromise(promise);
    }
}
