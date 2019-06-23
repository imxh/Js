var body = $response.body;
const path = "/app_api/v5/getuserinfo";
if (url.indexOf(path) != -1) {
	let obj = JSON.parse(body);
	obj["isvip"] = "1";
	body = JSON.stringify(obj);
 }
$done({body});
