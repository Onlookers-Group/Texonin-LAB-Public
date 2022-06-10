//let params = getParams($argument)
const BASE_URL = 'https://www.netflix.com/title/'

const FILM_ID = 81215567
const AREA_TEST_FILM_ID = 80018499

;(async () => {
  let result = {
    title: "你是准备看NFLX吗？我的宝！",
    icon: "wifi.slash",
	  'icon-color':"#000000",
    content: "你快刷新我的喔！网络不怎么好喔！",
  }
  await test(FILM_ID)
    .then((code) => {
      if (code === 'Not Found') {
        return test(AREA_TEST_FILM_ID)
      }
      result['title'] = "你是准备看NFLX吗？我的宝！"
      result['icon'] = "checkmark.seal"
	    result['icon-color'] = '#16A951'
      result['content'] = "宝~ 在" + code.toUpperCase() + "可以观看全部的喔！"
      return Promise.reject('BreakSignal')
    })
    .then((code) => {
      if (code === 'Not Found') {
        return Promise.reject('Not Available')
      }
      result['title'] = "你是准备看NFLX吗？我的宝！"
      result['icon'] = "exclamationmark.triangle"
	    result['icon-color'] = "#FFD700"
      result['content'] = "但是你在" + code.toUpperCase() + "只能看自制的喔！"
      return Promise.reject('BreakSignal')
    })
    .catch((error) => {
      if (error === 'Not Available') {
        result['title'] = "你是准备看NFLX吗？我的宝！"
        result['icon'] = "eye.slash"
	      result['icon-color'] = "#DC143C"
		result['content'] = "叼毛！这里不能看的喔！快去搬砖喔！"
        return
      }
    })
    .finally(() => {
      $done(result)
    })
})()

function test(filmId) {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL + filmId,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $httpClient.get(option, function (error, response, data) {
      if (error != null) {
        reject('Error')
        return
      }

      if (response.status === 403) {
        reject('Not Available')
        return
      }

      if (response.status === 404) {
        resolve('Not Found')
        return
      }

      if (response.status === 200) {
        let url = response.headers['x-originating-url']
        let region = url.split('/')[3]
        region = region.split('-')[0]
        if (region == 'title') {
          region = 'us'
        }
        resolve(region)
        return
      }

      reject('Error')
    })
  })
}

function getParams(param) {
  return Object.fromEntries(
    $argument
      .split("&")
      .map((item) => item.split("="))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
}
