var body = $response.body;
var url = $request.url;
const path = "/pan/task/add";
const path1 = "/pan/user/quota";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["status"] = "true";
 }
 if (url.indexOf(path) != -1) {
	obj["data"] = "当前离线额度:70 预览:70，有效期:2019-09-05";
  obj["status"] = "true";
 }
body = JSON.stringify(obj);
$done({body});
