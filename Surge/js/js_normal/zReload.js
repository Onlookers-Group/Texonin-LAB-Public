
$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("：Are you want to reload Surge?","Sir, I'm already to reload Surge!","")
    $done({
        title: "Reload Surge!",
        content: "Enjoy your day, Sir!",
        icon: "hand.thumbsup.circle",
        "icon-color": "#0047AB",
     })
    });