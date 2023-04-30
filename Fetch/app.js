// Fetch API - Browser API for HTTP (AJAX) Requests
// Fetch returns a promise
// Default get, but supports other RESTful methods aswell

const url = 'https://www.course-api.com/react-tours-project'

// fetch(url)
//   .then((resp) => resp.json()
//   .then((data) => console.log(data)))
//   .catch((err) => console.log(err))

const getTours = async () => {
  try {
    const resp = await fetch(url)
    // const data = await resp.json()
    // console.log(data)

    // return await resp.json()

    return resp.json()
  } catch (err) {
    console.log(err)
  }
}

// getTours()
// console.log(getTours())
console.log(getTours().then())