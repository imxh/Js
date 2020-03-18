转发自：https://github.com/chavyleung/scripts/tree/master/videoqq

Surge：
hostname = *.video.qq.com
cron "1 0 * * *" script-path=https://github.com/imxh/js/raw/master/videoqq/videoqq.js,script-update-interval=0
http-request ^https:\/\/access.video.qq.com\/user\/auth_refresh script-path=https://github.com/imxh/js/raw/master/videoqq/videocookie.js,script-update-interval=0
