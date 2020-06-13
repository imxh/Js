/*
奇热小说破解付费阅读，使用前切换翻页模式为平滑翻页。
Surge4：
http-response ^https?:\/\/api\.weiqire\.com/ios41\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/imxh/Js/master/Break/QRXS.js
MITM = api.weiqire.com
*/
let url = $request.url;
let body = JSON.parse($response.body);
let user = '/user/';
let chapter = '/chapter/';
if (url.indexOf(user) != -1)
   {
    body.data.info.vip_expire = 1;
    body.data.info.vip = 1;
   }
   else if (url.indexOf(chapter) != -1)
   {
   body.data.records.isVip = 1;
   body.data.records.isBuy = 1;
   }
   body = JSON.stringify(body);
$done({body});
