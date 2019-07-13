var body = $response.body;
var url = $request.url;
const path = "/ucp/index";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj.data.uinfo["down_daily_remainders"] = "99";
        obj.data.uinfo["play_daily_remainders"] = "999";
	body = JSON.stringify(obj);
 }
$done({body});


//小小影视下载地址http://t.cn/AiWxg6kE
//By HoGer
//hostname = ios.xiaoxiaoapps.com
//http-response https?:\/\/ios\.xiaoxiaoapps\.com\/ucp\/index
