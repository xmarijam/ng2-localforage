"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromPromise');
var tokens_1 = require('./tokens');
var LocalForageService = (function () {
    function LocalForageService(localForage) {
        this.localForage = localForage;
    }
    LocalForageService.prototype.getItem = function (key) {
        var promise = this.localForage.getItem(key);
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.setItem = function (item) {
        var promise = this.localForage.setItem(item.key, item.value);
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.removeItem = function (key) {
        var promise = this.localForage.removeItem(key);
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.clear = function () {
        var promise = this.localForage.clear();
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.length = function () {
        var promise = this.localForage.length();
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.key = function (index) {
        var promise = this.localForage.key(index);
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.prototype.keys = function () {
        var promise = this.localForage.keys();
        return Observable_1.Observable.fromPromise(promise);
    };
    LocalForageService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    LocalForageService.ctorParameters = [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [tokens_1.LocalForageToken,] },] },
    ];
    return LocalForageService;
}());
exports.LocalForageService = LocalForageService;
//# sourceMappingURL=services.js.map