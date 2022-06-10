
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("：就是你要重载配置吗？","你好，已经重载你的配置。","")
    $done({
        title: "不开心就刷新我一下的喔！",
        content: "宝～ 今天也要开开心心的喔！",
        icon: "hand.thumbsup.circle",
        "icon-color": "#0047AB",
     })
    });
