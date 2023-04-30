// Only throws an error if cannot resolve
// Error Response is still a response however (400-500) - Only network errors will be caught

// Incorrect URL
const url = 'https://www.course-api.com/react-tours-projects'

const getTours = async () => {
  try {
    const resp = await fetch(url)
    if(!resp.ok) {
      const msg = `Error fetching: "${resp.status} ${resp.statusText}"`
      throw new Error(msg)
    }
    const tours = await resp.json()
    console.log(tours)
  } catch (err) {
    console.log(err)
  }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)