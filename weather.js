const weaapi = "https://www.tianqiapi.com/api/?version=v6"
$httpClient.get(weaapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var obj = JSON.parse(data);
        console.log(obj);
        var city = "所在城市：" + obj.city + "市";
        var wea = "天气状况：" + obj.wea + "  当前" + obj.tem + "℃  " + obj.tem2 + "℃～" + obj.tem1 + "℃";
        var air = "当前风力：" + obj.win + obj.win_speed + "  风速" + obj.win_meter + "\n空气指数：" + obj.air + "  " + obj.air_level + "\n更新时间：" + obj.date + " "+ obj.week + " "+ obj.update_time;
        $notification.post(city,wea,air);
        $done();
    }
}
);
/* 修改自：https://meetagit.github.io/MeetaRules/Surge/Scripting/hourlyWeather.js
8，12，18三个时间点天气通知，可自行修改
文本编辑模式下复制粘贴
cron "0 8,12,18 * * *" script-path=https://raw.githubusercontent.com/imxh/js/master/weather.js,script-update-interval=0
向通知中心发送通知，Surge iOS 上需开启通知总开关
*/
