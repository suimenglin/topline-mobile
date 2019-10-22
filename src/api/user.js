function userLogin (axios, { url, method, data }) {
  return axios({
    url,
    method,
    data
  })
}

export {
  userLogin
}
