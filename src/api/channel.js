function apiGetChannelList (axios, { url, method }) {
  return axios({
    url,
    method
  })
}
export { apiGetChannelList }
