import * as httpErrors from "http-errors";
import { getError } from "test-package";

const err1 = new httpErrors.Unauthorized("Foo");
console.log(err1 instanceof httpErrors.HttpError); // will output true

const err2 = getError();
console.log(err2 instanceof httpErrors.HttpError); // will output false!
