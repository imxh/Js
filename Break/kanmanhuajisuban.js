var body = $response.body;
var url = $request.url;
const path = "/app_api/v5/getuserinfo/";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["isvip"] = "1";
	body = JSON.stringify(obj);
 }
$done({body});


//看漫画极速版
//By HoGer
//hostname = getuserinfo.321mh.com
//http-response https?:\/\/getuserinfo\.321mh\.com\/app_api\/v5\/getuserinfo\/
