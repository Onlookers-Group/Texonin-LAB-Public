#!name=World Peace
#!desc=Yet Another Redirect Module

[Rule]
DOMAIN-SET,https://dbl.oisd.nl/nsfw/, REJECT
DOMAIN-SUFFIX,fast.com,REJECT
DOMAIN-SUFFIX,ooklaserver.net,REJECT
DOMAIN-SUFFIX,speed.cloudflare.com,REJECT
DOMAIN-KEYWORD,speedtest,REJECT
DOMAIN-KEYWORD,speed,REJECT
USER-AGENT,SpeedTest*,REJECT
