"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let input;
input = 3;
input = [1, 2];
input = ['1', '2'];
// error
// let resultInput: string = input;
// no error with any
let resultInput = input;
function run(i) {
    if (typeof i === 'number') {
        i++; // number
    }
    else {
        i; // unknown
    }
}
run(input);
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) { // error is unknown
            // error! is unknown
            // console.log(error.message);
            if (error instanceof SyntaxError) {
                console.log(error.message);
            }
            // worse that prev check, will fail if come diff type
            const e = error;
            console.log(e.message);
        }
    });
}
