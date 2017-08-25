export const setLocalStorage = function (key, arr) {
  try {
    const stringifiedArr = JSON.stringify(arr)
    localStorage.setItem(key, stringifiedArr)
  } catch (err) {
    console.error(err.message)
  }
}

export const getLocalStorage = function (key) {
  try {
    const data = localStorage.getItem(key)
    const parsedData = data && JSON.parse(data) || []
    return parsedData
  } catch (err) {
    console.error(err.message)
  }
}