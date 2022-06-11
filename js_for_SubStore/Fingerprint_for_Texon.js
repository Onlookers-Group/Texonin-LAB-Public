function operator(proxies) {
  proxies.map(res => {
    if (res.type == 'trojan') {
      res.tfo = `${res.tfo||false}, server-cert-fingerprint-sha256= db dc c2 2d 3a 60 a7 92 92 84 4c 72 6e 21 0e 30 49 d5 e2 58 ad 08 67 20 83 79 f6 f6 52 a9 f0 16`;
    }
  })
  return proxies
}
