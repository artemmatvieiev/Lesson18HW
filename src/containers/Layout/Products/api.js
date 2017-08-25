export const getProductsApi = async function () {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      mode: "cors"
    })

    const res = await data.json()
    return res.slice(0, 10)
  } catch (err) {
    console.error(err.message)
  }
}