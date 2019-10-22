// 封装localstorage
const USER_KEY = 'user'
// 新增
function setUserLocal (value) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(value))
}
// 删除
function removeUserLocal () {
  window.localStorage.removeItem(USER_KEY)
}
// 查询
function getUserLocal () {
  return JSON.parse(window.localStorage.getItem(USER_KEY))
}

export {
  setUserLocal,
  removeUserLocal,
  getUserLocal
}
