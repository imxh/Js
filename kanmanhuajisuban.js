var result = body

let path = '/app_api/v5/getuserinfo';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.isvip = 1;
    result = JSON.stringify(jsbody);
}
result;
