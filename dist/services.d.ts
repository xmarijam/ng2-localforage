import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { LocalForageItem } from './models';
export declare class LocalForageService {
    private localForage;
    constructor(localForage: any);
    getItem(key: string): Observable<any>;
    setItem(item: LocalForageItem): Observable<any>;
    removeItem(key: string): Observable<any>;
    clear(): Observable<any>;
    length(): Observable<number>;
    key(index: number): Observable<string>;
    keys(): Observable<string[]>;
}
