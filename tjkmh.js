var body = $response.body;
var url = $request.url;
const path = "/v1/getnewpayprice";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["price"] = "0";
  obj["cost_diamonds"] = "0";
	body = JSON.stringify(obj);
 }
$done({body});


//看漫画极速版
//By HoGer
//hostname = userpurchased-globalapi.yyhao.com
//http-response https?:\/\/userpurchased-globalapi.yyhao.com\/v1/getnewpayprice
