/*

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
