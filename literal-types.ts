type HttpMethod = 'post' | 'get';


function fetchWithAuth(url: string, method: HttpMethod) {

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
fetchWithAuth('s', method as 'get');

