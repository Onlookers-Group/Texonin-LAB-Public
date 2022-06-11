# Texon‘s LAB
本项目由 [Texon](https://texon.io/) 订户自行收集、整理、维护。

## 特别声明

**本项目的作者和所有贡献者不会提供任何技术支持，也不会对你的任何损失负责**
**所有规则数据都来自互联网，感谢开源规则项目作者的辛勤付出。**

1. 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。
2. 编写本项目主要目的为学习和研究ES6，无法保证项目内容的合法性、准确性、完整性和有效性。
3. 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
4. 本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
5. 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
6. 所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
7. 所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
8. 本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。

## 实用性工具

| 实用性工具 | 链接       |
| -------- | ----------- | 
| 官方订阅转换 | https://sub.texon.io |
| 官方 GitHub 反代 | https://raw.txn3.dev |
| IP 信息查询 | https://www.ipip.net/ip.html |
| 终端多 IP 查询 | https://ip.skk.moe |
## Sub-Store
| 实用性工具 | 链接       |
| -------- | ----------- | 
| Surge | https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/Surge.sgmodule |
| Loon | https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/Loon.plugin |
| Quantumult X | https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/QX.snippet |
| Stash | https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/config/Stash.stoverride |
| Sub-Store 教程 | https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46 |

## Surge

### General
```ini
[General]
loglevel = notify
internet-test-url = http://g.alicdn.com/generate_204
proxy-test-url = http://www.gstatic.com/generate_204
proxy-test-udp = apple.com@1.1.1.1
test-timeout = 5
exclude-simple-hostnames = true
show-error-page-for-reject = true
ipv6 = true

skip-proxy = localhost, *.local, passenger.t3go.cn, e.crashlytics.com, captive.apple.com, app.yinxiang.com, injections.adguard.org, local.adguard.org, cable.auth.com, yunbusiness.ccb.com, 10.0.0.0/8, 100.64.0.0/10, 127.0.0.1/32, 169.254.0.0/16, 172.16.0.0/12, 192.168.0.0/16, 224.0.0.0/4, 240.0.0.0/4, ::1/128, fc00::/7, fd00::/8, fe80::/10, ff00::/8, 2001::/32, 2001:db8::/32, 2002::/16, ::ffff:0:0:0:0/1, ::ffff:128:0:0:0/1
always-real-ip = *.lan, cable.auth.com, *.msftconnecttest.com, *.msftncsi.com, *.*.*.srv.nintendo.net, *.*.stun.playstation.net, xbox.*.*.microsoft.com, *.*.xboxlive.com, stun.*, localhost.ptlogin2.qq.com, *.logon.battlenet.com.cn, *.logon.battle.net, *.blzstatic.cn, music.163.com, *.music.163.com, *.126.net, musicapi.taihe.com, music.taihe.com, songsearch.kugou.com, trackercdn.kugou.com, *.kuwo.cn, api-jooxtt.sanook.com, api.joox.com, joox.com, y.qq.com, *.y.qq.com, streamoc.music.tc.qq.com, mobileoc.music.tc.qq.com, isure.stream.qqmusic.qq.com, dl.stream.qqmusic.qq.com, aqqmusic.tc.qq.com, amobile.music.tc.qq.com, *.xiami.com, *.music.migu.cn, music.migu.cn, proxy.golang.org, *.mcdn.bilivideo.cn, *.cmpassport.com, id6.me, open.e.189.cn, mdn.open.wo.cn, auth.wosms.cn, *.jegotrip.com.cn, *.icitymobile.mobi, *.pingan.com.cn, *.cmbchina.com, pool.ntp.org, *.pool.ntp.org, ntp.*.com, time.*.com, ntp?.*.com, time?.*.com, time.*.gov, time.*.edu.cn, *.ntp.org.cn, PDC._msDCS.*.*, DC._msDCS.*.*, GC._msDCS.*.*
//tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
//tun-included-routes = 192.168.1.12/32

always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com

# DNS (如无必要不建议使用 DNS over HTTPS)
hijack-dns = *:53
dns-server = 119.29.29.29, 223.5.5.5, 223.6.6.6
//doh-follow-outbound-mode = false
//doh-format = wireformat
//doh-server = https://dns.tuna.tsinghua.edu.cn:8443/dns-query



# iOS
# >混合网络
all-hybrid = true 
allow-wifi-access = true
# >允许热点访问
allow-hotspot-access = true
wifi-assist = false
include-all-networks = false
include-local-networks = false
http-listen = 0.0.0.0

```

### 分流规则
**我们并不生产规则，我们只是开源规则的搬运工。**

Blackmatrix:
https://github.com/blackmatrix7/ios_rule_script/tree/master/rule/Surge

DivineEngine:
https://github.com/DivineEngine/Profiles/tree/master/Surge/Ruleset

Sukka:
https://github.com/SukkaW/Surge

### GEOIP 数据库
**注意自行甄别是否包含 IPv6 地址**

MaxMind GeoLite Mirror:
https://geolite.clash.dev

alecthw:
https://github.com/alecthw/mmdb_china_ip_list

Misaka Network, Inc:
https://github.com/misakaio/chnroutes2

IPIP.net:
https://github.com/17mon/china_ip_list

Hackl0us:
https://github.com/Hackl0us/GeoIP2-CN

### Panel 面板

流媒体检测：
| 流媒体检测 | 普通版       |骚话版       |
| -------- | ----------- | ---------- | 
| DAZN | [DAZN 普通](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/DAZN.sgmodule) | [DAZN 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/DAZN.sgmodule) | 
| Disney+ | [Disney+ 普通](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/Disney.sgmodule) | [Disney+ 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/Disney.sgmodule) | 
| Netflix | [Netflix 普通](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/Netfilx.sgmodule) | [Netflix 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/Netfilx.sgmodule) | 
| YouTube | [YouTube 普通](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/Youtube.sgmodule) | [YouTube 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/Youtube.sgmodule) | 
| YouTube/Netflix/Disney+ | [YouTube/Netflix/Disney+](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/zStreaming3t1.sgmodule) | [YouTube/Netflix/Disney+ 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/zStreaming3t1.sgmodule) | 
| YouTube/Netflix/Disney+/DAZN | [YouTube/Netflix/Disney+/DAZN](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_normal/zStreaming4t1.sgmodule) | [YouTube/Netflix/Disney+/DAZN 骚话](https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/sgmodule_baby/zStreaming4t1.sgmodule) | 


功能性：
| 功能模块 | Panel       |
| -------- |----------- |
| 配置重载 | https://raw.githubusercontent.com/futurkk/Potato/main/Surge%20for%20myself/sgmodule/reload.sgmodule |
| 网络连通性检查 | https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/Connectivity_Test |
| 网络综合信息 | https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/sgmodule/NET_INFO |

机场信息：
```ini
#!name=Texon's LAB
#!desc=Informations for Texonin

[Panel]
#Airport
Sub_info = script-name=Sub_info,update-interval=43200


[Script]
#Airport
Sub_info = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Surge/js/js-Airport/enAirport.js,script-update-interval=0,argument=reset_day=**&url=[encode后的订阅链接]
```

## Quantumult(X)
### Texon 图标
|图标|img-url 链接|
| -------- | ----------- | 
|小鳄鱼|https://github.com/Onlookers-Group/Texonin-LAB-Public/raw/main/Icon/Little_crocodile.png|
|戴眼镜小鳄鱼|https://github.com/Onlookers-Group/Texonin-LAB-Public/raw/main/Icon/Crocodile_with_glasses.png|
|小恐龙|https://github.com/Onlookers-Group/Texonin-LAB-Public/raw/main/Icon/Little_dinosaur.png|



### 解析器
https://cdn.jsdelivr.net/gh/KOP-XIAO/QuantumultX@master/Scripts/resource-parser.js




## 感谢
