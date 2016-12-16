"use strict";
var core_1 = require('@angular/core');
var localforage = require('localforage');
var services_1 = require('./services');
var tokens_1 = require('./tokens');
function localforageFactory() {
    return localforage;
}
exports.localforageFactory = localforageFactory;
var LocalForageModule = (function () {
    function LocalForageModule() {
    }
    LocalForageModule.forRoot = function () {
        return {
            ngModule: LocalForageModule,
            providers: [{
                    provide: tokens_1.LocalForageToken,
                    useFactory: localforageFactory
                },
                services_1.LocalForageService
            ]
        };
    };
    LocalForageModule.decorators = [
        { type: core_1.NgModule },
    ];
    /** @nocollapse */
    LocalForageModule.ctorParameters = [];
    return LocalForageModule;
}());
exports.LocalForageModule = LocalForageModule;
//# sourceMappingURL=modules.js.map