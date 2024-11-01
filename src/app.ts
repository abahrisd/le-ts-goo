import { A } from './modules/app2.js';
import DefaultExportConst, { Export as MyExport, type MyType } from './modules/app2';
import * as all from './modules/app2';

let revenue = 1000;
let bonus = 500;

let total: number = revenue + bonus;

console.log('A', A.a);

