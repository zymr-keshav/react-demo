import { nm as vm, ALPHA, BETA, GAMMA } from './export_'

import _wheteverNameForDefaultExport_  from './export_'

console.log("alpha is ", ALPHA);
console.log("beta is", BETA);
console.log("gamma is", GAMMA);
console.log(`message is ${vm(5)}`);

console.log(`gm ${nm(6)}`); // error

_wheteverNameForDefaultExport_();