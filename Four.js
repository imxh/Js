const accounts = [
    ["ssrcloud", "https://ssrcloud.org/auth/login", "imxh@live.cn", "asdfghjkl"]
]

async function launch() {
    for (var i in accounts) {
        let title = accounts[i][0]
        let url = accounts[i][1]
        let email = accounts[i][2]
        let password = accounts[i][3]
        await login(url, email, password, title)
    }
    $done();
}
launch()

function login(url, email, password, title) {
    let loginPath = url.indexOf("auth/login") != -1 ? "auth/login" : "user/_login.php"
    let table = {
        url: url.replace(/(auth|user)\/login(.php)*/g, "") + loginPath,
        header: {

        },
        body: {
            "email": email,
            "passwd": password,
            "rumber-me": "week"
        }
    }
    $httpClient.post(table, async function (error, response, data) {
        if (error) {
            console.log(error);
            $notification.post(title + '登录失败', error, "");
        } else {
            if (JSON.parse(data).msg == "邮箱或者密码错误") {
                $notification.post(title + '邮箱或者密码错误', "", "");
            } else {
                await checkin(url, title)
            }
        }
    }
    );
}

function checkin(url, title) {
    let checkinPath = url.indexOf("auth/login") != -1 ? "user/checkin" : "user/_checkin.php"
    $httpClient.post(url.replace(/(auth|user)\/login(.php)*/g, "") + checkinPath, async function (error, response, data) {
        if (error) {
            console.log(error);
            $notification.post(title + '签到失败', error, "");
        } else {
            await dataResults(url, JSON.parse(data).msg, title)
        }
    });
}

function dataResults(url, checkinMsg, title) {
    let userPath = url.indexOf("auth/login") != -1 ? "user" : "user/index.php"
    $httpClient.get(url.replace(/(auth|user)\/login(.php)*/g, "") + userPath, function (error, response, data) {
        var usedData = data.match(/(>*\s*已用(里程|流量|\s\d.+?%|：))[^B]+/)
        if (usedData) {
            usedData = usedData[0].match(/\d\S*(K|G|M|T)/)
            var restData = data.match(/(>*\s*(剩余|可用)(里程|流量|\s\d.+?%|：))[^B]+/)
            restData = restData[0].match(/\d\S*(K|G|M|T)/)
            $notification.post(title, checkinMsg, "已用流量：" + usedData[0] + "B" + "\n剩余流量：" + restData[0] + "B");
        } else {
            $notification.post(title + '获取流量信息失败', "", "");
        }
    });
}
