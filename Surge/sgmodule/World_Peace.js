#!name=World Peace
#!desc=Yet Another Redirect Module

[Rule]
DOMAIN-SUFFIX,fast.com,REJECT
DOMAIN-SUFFIX,ooklaserver.net,REJECT
DOMAIN-SUFFIX,speed.cloudflare.com,REJECT
DOMAIN-KEYWORD,speedtest,REJECT
DOMAIN-KEYWORD,speed,REJECT
USER-AGENT,SpeedTest*,REJECT
