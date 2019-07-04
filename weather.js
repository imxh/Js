const hfapi = "https://www.tianqiapi.com/api/?version=v6"
function getwmatioin(data){
    var obj = JSON.parse(data);
    console.log(obj);
    let city = obj.city;
    let wea = obj.wea;
    let tem = obj.tem;
    let tem1 = obj.tem1;
    let tem2 = obj.tem2;
    let win = obj.win;
    let win_speed = obj.win_speed;
    let win_meter = obj.win_meter;
    let air = obj.air;
    let air_level = obj.air_level;
    let date = obj.date;
    let week = obj.week;
    let update_time = obj.update_time;
    let mm = [city, wea, tem, tem1, tem2, win, win_speed, win_meter, air, air_level, date, week, update_time];
    return mm


}

$httpClient.get(hfapi, function(error, response, data){
    if (error){
        console.log(error);
        $done();                   
    } else {
        var mm = getwmatioin(data);
        var title = "所在城市："+mm[0];
        var subtitle = "天气状况："+mm[1]+"  "+mm[4]+"℃~"+mm[3]+"℃"+"  "+"当前"+mm[2]+"℃";
        var mation = "其他指数："+mm[5]+mm[6]+"风速"+mm[7]+"空气指数："+mm[8]+"  "+mm[9]+"\n更新时间："+mm[6];
        $notification.post(title, subtitle, mation);
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
