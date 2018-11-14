"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors = __importStar(require("http-errors"));
const test_package_1 = require("test-package");
const err1 = new httpErrors.Unauthorized("Foo");
console.log(err1 instanceof httpErrors.HttpError); // will output true
const err2 = test_package_1.getError();
console.log(err2 instanceof httpErrors.HttpError); // will output false!
