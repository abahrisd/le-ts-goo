"use strict";
function fetchWithAuth(url, method) {
}
fetchWithAuth('string', 'post');
fetchWithAuth('string', 'get');
// error
//fetch('string', 'update');
let method = 'get';
// error
// fetchWithAuth('s', method);
const method2 = 'get';
fetchWithAuth('s', method2);
fetchWithAuth('s', method);
