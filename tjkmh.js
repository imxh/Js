var body = $response.body;
var url = $request.url;
const path = "/v1/getnewpayprice";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj.data.price = 0;
	body = JSON.stringify(obj);
 }
$done({body});
